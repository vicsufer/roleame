import { PlayerCharacter } from 'app/types/playerCharacter';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../../../types/player';
import { AmplifyService } from 'aws-amplify-angular';
import { NotificationService } from '../../../core/notifications/notification.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService, GetTabletopDataQuery } from 'app/core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { Observable, of, range } from 'rxjs';
import { TabletopCharacter } from 'app/types/tabletopCharacter';

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
  currentCharacter: TabletopCharacter

  firstSelectedTile: {position: number , token: TabletopCharacter} = undefined;
  secondSelectedTile: {position: number , token: TabletopCharacter} | any = undefined;

  tiles = []

  playerCharacters: {name: string, id: string, uuid: string, hitPoints: number}[] = []

  constructor(private apiService: APIService,
    private amplifyService: AmplifyService,
    private translateService: TranslateService, 
    private notificationService: NotificationService,
    private route: ActivatedRoute) {

      this.amplifyService.auth().currentAuthenticatedUser().then(user => {
        this.currentUsername = user.username

        //Retrieve current player available characters
        this.apiService.ListPlayerCharactersIdentificators({owner: {eq: this.currentUsername}}).then( (res)=> {
          var characters = res.items
          this.playerCharacters = characters
        }).catch(err => console.log(err));

        }).catch(err => console.log(err));

      this.route.queryParamMap.subscribe(params => {
        this.isLoading = true;
        var tabletopID = params.get('tabletopID')

        //Subscribe to tabletop changes
        this.apiService.OnUpdateTabletopListener.subscribe( {
          next: (plainTabletop) => {
            plainTabletop = plainTabletop.value.data.onUpdateTabletop
            console.log(plainTabletop)
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
        this.apiService.OnCreateTabletopListener.subscribe({
          next: (newCharacter) => {
            newCharacter = newCharacter.value.data.onCreateTabletopCharacter
            if( newCharacter.tabletopID !== this.tabletop.id ) return;
            
            this.moveCharacter(newCharacter, newCharacter.location.x, newCharacter.location.y)
          },
          error: error => console.error(error)
        });

        this.apiService.OnUpdateTabletopCharacterListener.subscribe({
          next: (updatedCharacter) => {
            updatedCharacter = updatedCharacter.value.data.onUpdateTabletopCharacter
            if( updatedCharacter.tabletopID !== this.tabletop.id ) return
            
            var characterToUpdate = this.tabletop.characters.find( char => char.id == updatedCharacter.id)
            if( characterToUpdate.character !== updatedCharacter.character ){
              characterToUpdate.character = updatedCharacter.character
            }
            if( characterToUpdate.location !== updatedCharacter.location ){
              characterToUpdate.location = updatedCharacter.location
              this.moveCharacter(characterToUpdate, characterToUpdate.location.x, characterToUpdate.location.y)
            }
          },
          error: error => console.error(error)
        });
  
        // Retrieve tabletop data
        this.apiService.GetTabletopData(tabletopID).then( (tabletopRetrieved) => {
          var aux: Tabletop | any = tabletopRetrieved;
          aux.characters = aux.characters.items
          this.tabletop = aux
          this.renderBoard()
          //If this character belong to current user, set selector.
          var characterForCurrentPlayer = this.tabletop.characters.find( character => character.playerID === this.currentUsername )
          if(characterForCurrentPlayer){
            this.currentCharacter = characterForCurrentPlayer
          }
          this.isLoading = false;
        }).catch(e=>console.log(e))

      })
  }

  ngOnInit() {

  }

  isOwner() {
    if(!this.tabletop) return false;
    return this.currentUsername == this.tabletop.gameOwnerID;
  }

  renderBoard(){
    this.tiles = Array( (this.tabletop.height * this.tabletop.width) )
    this.tabletop.characters.forEach( character => {
      this.moveCharacter(character, character.location.x, character.location.y)
      character.character.name
    })
  }


  moveCharacter(character: TabletopCharacter, x: number, y: number){
    // Empty old tile
    for (var i = 0; i < this.tiles.length; i++) {
      if(this.tiles[i]){
        if(this.tiles[i].id == character.id){
         this.tiles[i] = undefined
         break;
        }
      }
    }
    
    // Transform to one-dimension
    var pos = y+this.tabletop.width*x
    // Set new position
    this.tiles[pos] = character
  }


  getCoordinates(position: number): {x: number, y: number} {
    // Transform to two-dimension
    var x, y
    y = position % this.tabletop.width
    x = (position-y)/this.tabletop.width;
    console.log({x,y})
    return {x,y}
  }

  selectTile(data: {position: number , token: TabletopCharacter}) {
    if(!this.firstSelectedTile && data.token){
      this.firstSelectedTile = data
    } else if (this.firstSelectedTile && data.token) {
      //TODO Interaction
      this.secondSelectedTile = data
      console.log('OU MAMA INTERACTION!')
    } else if (this.firstSelectedTile && !data.token){
      var token = this.firstSelectedTile.token
      var newCoordinates = this.getCoordinates(data.position)
      this.apiService.UpdateTabletopCharacter({id: token.id, location: newCoordinates}).then(()=>{}).catch((e)=>console.log(e))

      this.firstSelectedTile = undefined
    }
  }

  changeTabletopWidth(width){
    if( isNaN(Number(width))) return;
    console.log(width)
    this.apiService.UpdateTabletop({id: this.tabletop.id, width: width})
  }

  changeTabletopHeight(height){
    if( isNaN(Number(height))) return;
    console.log(height)
    this.apiService.UpdateTabletop({id: this.tabletop.id, height: height})
  }

  changeCharacter(event){
    var selectedCharacter: PlayerCharacter = event.value;
    var currentTabletopCharacter = this.tabletop.characters.find( (character) => character.playerID == this.currentUsername )
    if( currentTabletopCharacter ){
      this.apiService.UpdateTabletopCharacter({id:currentTabletopCharacter.id, characterID: selectedCharacter.id}).then( res => {
      }).catch( (e)=> {console.log(e)} )
    } else { 
      var newCharacter: TabletopCharacter
      newCharacter =  {
        tabletopID: this.tabletop.id,
        gameOwnerID: this.tabletop.gameOwnerID,
        playerID: this.currentUsername,
        characterID: selectedCharacter.id,
        currentHealth: selectedCharacter.hitPoints,
        location: this.getFirstAvailableLocation()
      }
      console.log(newCharacter)
      this.apiService.CreateTabletopCharacter(newCharacter).then( res => {
      }).catch( (e)=> { console.log(e)} )
    }
    
  }

  getFirstAvailableLocation(): {x: number, y: number} {
    var emptySpot = this.tiles.findIndex(Object.is.bind(null, undefined))
    return this.getCoordinates(emptySpot)
  }

}
