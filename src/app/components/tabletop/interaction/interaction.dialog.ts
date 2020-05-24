import { ChallengePayload, AttributeRollPaylod } from './../../../types/action';
import { APIService } from 'app/core/core.module';
import { ActionType } from './../../../core/services/API.service';
import { DiceRoller } from './../../../types/diceroller';
import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatListOption, MatSelectionListChange } from '@angular/material';
import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { SelectionModel } from '@angular/cdk/collections';
import { Action } from 'app/types/action';


export interface InteractionData {
  firstCharacter: TabletopCharacter,
  secondCharacter: TabletopCharacter
}

@Component({
  selector: 'interaction-dialog',
  templateUrl: 'interaction.dialog.html',
  styleUrls: ['interaction.dialog.scss']
})
export class InteractionDialog implements OnInit{

  firstCharacter: TabletopCharacter;
  secondCharacter: TabletopCharacter;

  showChallengePanel: boolean = false;
  showRollAttributePanel: boolean = false;

  constructor(
    private apiService: APIService,
    public dialogRef: MatDialogRef<InteractionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: InteractionData) {

      this.firstCharacter = data.firstCharacter
      this.secondCharacter = data.secondCharacter
  }

  ngOnInit() {
    
  }

  toggleChallengePanel(){
    this.showChallengePanel = !this.showChallengePanel
  }
  toggleRollAttributePanel(){
    this.showRollAttributePanel = !this.showRollAttributePanel
  }

  attack(){

  }

  heal(){
    
  }

  rollChallenge(challengedAttribute: string, attributeValue1: number, attributeValue2: number){
    var rolled1 = DiceRoller.simpleRoll(20)
    var bonifier1 = this.getAttributeBonifier(attributeValue1);
    var rolled2 = DiceRoller.simpleRoll(20)
    var bonifier2 = this.getAttributeBonifier(attributeValue2);

    var payload : ChallengePayload;
    payload = {
      attribute: challengedAttribute,
      challenger: {
          character: this.firstCharacter.character.name,
          rolled: rolled1,
          bonifier: bonifier1,
          total: rolled1+bonifier1
      },
      challenged: {
          character: this.secondCharacter.character.name,
          rolled: rolled2,
          bonifier: bonifier2,
          total: rolled2+bonifier2
      }
    }
    var action: Action
    action = {
      actionType: ActionType.CHALLENGE,
      timestamp: new Date().getTime(),
      payload: JSON.stringify(payload),
      player: this.firstCharacter.playerID,
      tabletopID: this.firstCharacter.tabletopID
    }
    this.apiService.CreateAction(action).then(()=>{}).catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }
  
  rollAttribute(rolledAttribute: string, attributeValue: number){
    var rolled = DiceRoller.simpleRoll(20)
    var bonifier = this.getAttributeBonifier(attributeValue);
    var action: Action;
    var payload: AttributeRollPaylod;
    payload = {
      attribute: rolledAttribute,
      bonifier,
      rolled,
      total: bonifier+rolled
    }
    action = {
      actionType: ActionType.ATTRIBUTEROLL,
      timestamp: new Date().getTime(),
      payload: JSON.stringify(payload),
      player: this.firstCharacter.playerID,
      tabletopID: this.firstCharacter.tabletopID
    }
    this.apiService.CreateAction(action).then(()=>{}).catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }

  getAttributeBonifier(attributeValue: number): number{
    return Math.floor( (attributeValue - 10) /2)
  }

}

