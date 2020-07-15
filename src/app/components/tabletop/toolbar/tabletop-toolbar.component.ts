import { Token } from './../../../types/token';
import { DiceRoller } from './../../../types/diceroller';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { PlayerCharacter } from 'app/types/playerCharacter';
import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService, ActionType } from 'app/core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { Action } from 'app/types/action';
import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'roleame-webapp-tabletop-toolbar',
  templateUrl: './tabletop-toolbar.component.html',
  styleUrls: ['./tabletop-toolbar.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TabletopToolbarComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChild('selectcurrentcharacter', {static: false}) characterSelector: MatSelect;
  @ViewChild('newtabletopcharacterform', {static: false}) characterForm: FormGroupDirective;
  @Input()
  tabletop: Tabletop;

  _currentCharacter: TabletopCharacter;

  @Input()
  set currentCharacter(character: TabletopCharacter){
    this._currentCharacter = character;
    if(character && this.characterSelector){
      this.characterSelector.writeValue(character)
    }
  }

  get currentCharacter() {
    return this._currentCharacter;
  }

  currentUsername: string;

  @Input()
  tiles: Token[] = [];

  diceRollForm: FormGroup;
  newTabletopCharacterForm: FormGroup;

  playerCharacters: {name: string, id: string, uuid: string, hitPoints: number}[] = []

  constructor(private apiService: APIService,
    private amplifyService: AmplifyService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.diceRollForm = this.formBuilder.group({
      dices: ['1', [Validators.required, Validators.min(1), Validators.max(20)]],
      sides: ['20', [Validators.required, Validators.min(2), Validators.max(20)]],
    });

    this.newTabletopCharacterForm = this.formBuilder.group({
      character: ['', [Validators.required]]
    });

    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username
      //Retrieve current player available characters
      this.apiService.ListPlayerCharactersIdentificators({owner: {eq: this.currentUsername}}).then( (res)=> {
        var characters = res.items
        this.playerCharacters = characters
      }).catch(err => console.error(err));
    }).catch(err => console.error(err));

  }

  findFirstEmptyTile(): number{
    for(var i; i<this.tiles.length; i++){
      this.tiles[i].character == undefined;
      return i
    }
    return 0;
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
      currentTabletopCharacter.currentHealth = currentTabletopCharacter.currentHealth > selectedCharacter.hitPoints? selectedCharacter.hitPoints : currentTabletopCharacter.currentHealth
      this.apiService.UpdateTabletopCharacter({id:currentTabletopCharacter.id, characterID: selectedCharacter.id}).then( res => {
      }).catch( (e)=> {console.error(e)} )
    } else { 
      var newCharacter: TabletopCharacter
      newCharacter =  {
        tabletopID: this.tabletop.id,
        gameOwnerID: this.tabletop.gameOwnerID,
        playerID: this.currentUsername,
        characterID: selectedCharacter.id,
        currentHealth: selectedCharacter.hitPoints,
        location: this.getCoordinates(this.findFirstEmptyTile())
      }
      this.apiService.CreateTabletopCharacter(newCharacter).then( res => {
      }).catch( (e)=> { console.error(e)} )
    }
  }

  addCharacter(){
    var character = this.newTabletopCharacterForm.get('character').value
    var newCharacter: TabletopCharacter
    newCharacter =  {
      tabletopID: this.tabletop.id,
      gameOwnerID: this.tabletop.gameOwnerID,
      playerID: this.currentUsername,
      characterID: character.id,
      currentHealth: character.hitPoints,
      location: this.getCoordinates(this.findFirstEmptyTile())
    }
    this.apiService.CreateTabletopCharacter(newCharacter).then( res => {
    }).catch( (e)=> { console.error(e)} )
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
    this.notifyRoll(result.total, result.rolls)
  }

  notifyRoll(total: number, rolls: number[]) {
    var action : Action;
    action = {
      timestamp: new Date().getTime(),
      actionType: ActionType.DICEROLL,
      player: this.currentUsername,
      payload: `{ "total": ${total}, "rolls":[${rolls}]}`,
      tabletopID: this.tabletop.id,
    }
    this.apiService.CreateAction( action )
  }

}
