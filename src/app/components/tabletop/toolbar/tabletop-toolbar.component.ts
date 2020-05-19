import { DiceRoller } from './../../../types/diceroller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerCharacter } from 'app/types/playerCharacter';
import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { TabletopCharacter } from 'app/types/tabletopCharacter';

@Component({
  selector: 'roleame-webapp-tabletop-toolbar',
  templateUrl: './tabletop-toolbar.component.html',
  styleUrls: ['./tabletop-toolbar.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TabletopToolbarComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @Input()
  tabletop: Tabletop;

  @Input()
  currentCharacter: TabletopCharacter;

  currentUsername: string;

  @Input()
  firstEmptyTile: number;

  diceRollForm: FormGroup;

  playerCharacters: {name: string, id: string, uuid: string, hitPoints: number}[] = []

  constructor(private apiService: APIService,
    private amplifyService: AmplifyService,
    private formBuilder: FormBuilder) {
      
  }

  ngOnInit() {

    this.diceRollForm = this.formBuilder.group({
      dices: ['1', [Validators.required, Validators.min(1), Validators.max(20)]],
      sides: ['20', [Validators.required, Validators.min(2), Validators.max(1000)]],
    });

    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username
      //Retrieve current player available characters
      this.apiService.ListPlayerCharactersIdentificators({owner: {eq: this.currentUsername}}).then( (res)=> {
        var characters = res.items
        this.playerCharacters = characters
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));

  }

  isOwner() {
    if(!this.tabletop) return false;
    return this.currentUsername == this.tabletop.gameOwnerID;
  }

  changeTabletopWidth(width){
    if( isNaN(Number(width))) return;
    this.apiService.UpdateTabletop({id: this.tabletop.id, width: width})
  }

  changeTabletopHeight(height){
    if( isNaN(Number(height))) return;
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
        location: this.getCoordinates(this.firstEmptyTile)
      }
      this.apiService.CreateTabletopCharacter(newCharacter).then( res => {
      }).catch( (e)=> { console.log(e)} )
    }
  }

  getCoordinates(position: number): {x: number, y: number} {
    // Transform to two-dimension
    var x, y
    y = position % this.tabletop.width
    x = (position-y)/this.tabletop.width;
    return {x,y}
  }

  rollDice() {
    var sides = this.diceRollForm.get('sides').value;
    var dices = this.diceRollForm.get('dices').value;

    var result = DiceRoller.composedRoll(sides, dices)
    console.log(result)
  }

}