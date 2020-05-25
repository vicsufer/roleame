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
    this.apiService.RollAttackAction(
      this.firstCharacter.character.name,
      this.firstCharacter.character.strength,
      this.secondCharacter.id,
      this.secondCharacter.character.name,
      this.secondCharacter.character.strength,
      this.secondCharacter.currentHealth,
      this.firstCharacter.playerID,
      this.firstCharacter.tabletopID
      ).then(()=>{}).
      catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }

  heal(){
    this.apiService.RollHealAction(
      this.firstCharacter.character.name,
      this.firstCharacter.character.wisdom,
      this.secondCharacter.id,
      this.secondCharacter.character.name,
      this.secondCharacter.character.hitPoints,
      this.secondCharacter.currentHealth,
      this.firstCharacter.playerID,
      this.firstCharacter.tabletopID
      ).then(()=>{}).
      catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }

  rollChallenge(challengedAttribute: string, attributeValue1: number, attributeValue2: number){

    this.apiService.RollChallengeAction(challengedAttribute, this.getAttributeBonifier(attributeValue1), this.firstCharacter.character.name, this.getAttributeBonifier(attributeValue2), this.secondCharacter.character.name, this.firstCharacter.playerID, this.firstCharacter.tabletopID).
          then(()=>{}).
          catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }
  
  rollAttribute(rolledAttribute: string, attributeValue: number){

    this.apiService.RollAttributeAction(rolledAttribute, this.getAttributeBonifier(attributeValue), this.firstCharacter.playerID, this.firstCharacter.tabletopID).
          then(()=>{}).
          catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }

  delete(){
    this.apiService.DeleteTabletopCharacter({id: this.firstCharacter.id}).then(()=>{}).catch((e)=>{console.log(e)})
    this.dialogRef.close()
  }

  getAttributeBonifier(attributeValue: number): number{
    return Math.floor( (attributeValue - 10) /2)
  }

}

