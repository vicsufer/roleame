import { Character } from 'app/types/character';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'app/core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { AmplifyService } from 'aws-amplify-angular';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Token } from './../../../types/token';
import { InteractionDialog } from './../interaction/interaction.dialog';


@Component({
  selector: 'roleame-webapp-tabletop-page',
  templateUrl: './tabletop-page.component.html',
  styleUrls: ['./tabletop-page.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TabletopPageComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  isLoading: boolean = true

  tabletop: Tabletop
  currentUsername: string;
  currentCharacter: TabletopCharacter;

  firstEmptyTile: number;
  firstSelectedTile: {position: number , token: Token} = undefined;
  secondSelectedTile: {position: number , token: Token} | any = undefined;

  tiles: Token[] = [];

  playerCharacters: {name: string, id: string, uuid: string, hitPoints: number}[] = []

  constructor(private apiService: APIService,
    private amplifyService: AmplifyService,
    private route: ActivatedRoute,
    private interactionDialog: MatDialog) {

      this.amplifyService.auth().currentAuthenticatedUser().then(user => {
        this.currentUsername = user.username
        }).catch(err => console.error(err));

      this.route.queryParamMap.subscribe(params => {
        this.isLoading = true;
        var tabletopID = params.get('tabletopID')

        //Subscribe to tabletop changes
        this.apiService.OnUpdateTabletopListener.subscribe( {
          next: (plainTabletop) => {
            plainTabletop = plainTabletop.value.data.onUpdateTabletop
            if( plainTabletop.id !== this.tabletop.id ) return;

            if( this.tabletop.width != plainTabletop.width ){
              this.tabletop.width = plainTabletop.width
              this.renderBoard()
            }

            if( this.tabletop.height != plainTabletop.height ){
              this.tabletop.height = plainTabletop.height
              this.renderBoard()
            }
          },
          error: error => console.error(error)
        })

        // Subscribe to tabletop created characters
        this.apiService.OnCreateTabletopCharacterListener.subscribe({
          next: (newCharacter) => {
            newCharacter = newCharacter.value.data.onCreateTabletopCharacter
            if( newCharacter.tabletopID !== this.tabletop.id ) return;
            if(!this.currentCharacter && this.currentUsername == newCharacter.playerID){
              this.currentCharacter = newCharacter;
            }
            this.placeCharacter(newCharacter, newCharacter.location.x, newCharacter.location.y)
            this.tabletop.characters= [...this.tabletop.characters, newCharacter]
          },
          error: error => console.error(error)
        });

        // Subscribe to tabletop character updates
        this.apiService.OnUpdateTabletopCharacterListener.subscribe({
          next: (updatedCharacter) => {
            updatedCharacter = updatedCharacter.value.data.onUpdateTabletopCharacter
            if( updatedCharacter.tabletopID !== this.tabletop.id ) return
            
            var characterToUpdate = this.tabletop.characters.find( char => char.id == updatedCharacter.id)
            
            if( characterToUpdate.location !== updatedCharacter.location ){
              this.moveCharacter(updatedCharacter, updatedCharacter.location.x, updatedCharacter.location.y)
              characterToUpdate.location = updatedCharacter.location
            }
            if( characterToUpdate.character !== updatedCharacter.character ){
              characterToUpdate.character = updatedCharacter.character
            }
          },
          error: error => console.error(error)
        });

        // Subscribe to tabletop character deletions
        this.apiService.OnDeleteTabletopCharacterListener.subscribe({
          next: (deletedCharacter) => {
            deletedCharacter = deletedCharacter.value.data.onDeleteTabletopCharacter
            if( deletedCharacter.tabletopID !== this.tabletop.id ) return;
            if( deletedCharacter.playerID == this.currentUsername ){
              this.currentCharacter = undefined;
            }
            var oldPosition = this.getPosition(deletedCharacter.location.x, deletedCharacter.location.y)
            this.tiles[oldPosition] = {character: undefined, isSelected: false, isMaster: false}

            this.tabletop.characters = this.tabletop.characters.filter( char => char.id != deletedCharacter.id )

            this.updateFirstEmptyTile();
          },
          error: error => console.error(error)
        });
  
        // Retrieve tabletop data
        this.apiService.GetTabletopData(tabletopID).then( (tabletopRetrieved) => {
          var aux: Tabletop | any = tabletopRetrieved;
          aux.characters = aux.characters.items
          this.tabletop = aux
          //If this character belong to current user, set selector.
          var characterForCurrentPlayer = this.tabletop.characters.find( character => character.playerID === this.currentUsername )
          if(characterForCurrentPlayer){
            this.currentCharacter = characterForCurrentPlayer
          }
          this.renderBoard()
          this.isLoading = false;
        }).catch(e=>console.error(e))

      })
  }

  ngOnInit() {

  }

  isOwner() {
    if(!this.tabletop) return false;
    return this.currentUsername == this.tabletop.gameOwnerID;
  }

  renderBoard(){
    this.tiles = Array( (this.tabletop.height * this.tabletop.width) ).fill({character: undefined, isSelected: false, isMaster: false})
    this.tabletop.characters.forEach( character => {
      this.placeCharacter(character, character.location.x, character.location.y)
    })
  }


  moveCharacter(character: TabletopCharacter, x: number, y: number){
    // Empty old tile
    var oldCharPosition = this.tabletop.characters.find( c=> c.id == character.id)
    if(oldCharPosition){
      var oldPos = this.getPosition(oldCharPosition.location.x, oldCharPosition.location.y)
      this.tiles[oldPos] = {character: undefined, isSelected: false, isMaster: false}
    }
    this.placeCharacter(character, x, y)
  }

  placeCharacter(character: TabletopCharacter, x: number, y: number){
    // Transform to one-dimension
    var pos = this.getPosition(x, y)
    // Set new position
    this.tiles[pos] = {character: character, isSelected: false, isMaster: this.isCharacterFromMaster(character)}
    this.updateFirstEmptyTile()
  }

  getPosition(x: number, y: number): number{
    return y+this.tabletop.width*x
  }

  isCharacterFromMaster(character: TabletopCharacter){
    return character.playerID == this.tabletop.gameOwnerID? true: false
  }


  getCoordinates(position: number): {x: number, y: number} {
    // Transform to two-dimension
    var x, y
    y = position % this.tabletop.width
    x = (position-y)/this.tabletop.width;
    return {x,y}
  }

  selectTile(data: {position: number , token: Token}) {
    if(!this.firstSelectedTile && data.token.character){
      //Do not allow character owner or game owner to use a character.
      if( data.token.character.playerID != this.currentUsername && this.tabletop.gameOwnerID != this.currentUsername ) {
        return;
      }
      this.firstSelectedTile = data
      this.firstSelectedTile.token.isSelected = true
    } else if (this.firstSelectedTile && !data.token.character){
      // Movement action
      var token = this.firstSelectedTile.token
      var newCoordinates = this.getCoordinates(data.position)
      this.apiService.UpdateTabletopCharacter({id: token.character.id, location: newCoordinates}).then(()=>{}).catch((e)=>console.error(e))
      this.firstSelectedTile.token.isSelected = false
      this.firstSelectedTile = undefined
    }
    else if (this.firstSelectedTile && data.token.character) {
      this.secondSelectedTile = data
      this.firstSelectedTile.token.isSelected = false
      this.showInteractionDialog(this.firstSelectedTile.token.character, data.token.character)
      this.firstSelectedTile = undefined
      this.secondSelectedTile = undefined
    } 
  }

  updateFirstEmptyTile(): number{
    for(var i; i<this.tiles.length; i++){
      this.tiles[i] == undefined;
      return i
    }
    return 0;
  }

  showInteractionDialog(firstCharacter: TabletopCharacter, secondCharacter: TabletopCharacter,  ): void {
    const dialogRef = this.interactionDialog.open(InteractionDialog, {
      width: '50%',
      height: '50%',
      data: {
        firstCharacter,
        secondCharacter
      }
    });
  }

  healCharacter(data: {characterID: string, healPoints: number}){
    var characterToUpdate = this.tabletop.characters.find( char => char.id == data.characterID)
    characterToUpdate.currentHealth += data.healPoints
  }

  attackCharacter(data: {characterID: string, damagePoints: number}){
    var characterToUpdate = this.tabletop.characters.find( char => char.id == data.characterID)
    characterToUpdate.currentHealth -= data.damagePoints
  }
}
