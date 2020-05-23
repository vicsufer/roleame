import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatListOption } from '@angular/material';
import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { SelectionModel } from '@angular/cdk/collections';


export interface InteractionData {
  firstCharacter: TabletopCharacter,
  secondCharacter: TabletopCharacter
}

@Component({
  selector: 'interaction-dialog',
  templateUrl: 'interaction.dialog.html',
  styleUrls: ['interaction.dialog.scss']
})
export class InteractionDialog {

  firstCharacter: TabletopCharacter;
  secondCharacter: TabletopCharacter;

  @ViewChild('action', {static: false}) actionList: MatSelectionList;

  constructor(
    public dialogRef: MatDialogRef<InteractionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: InteractionData) {
      this.firstCharacter = data.firstCharacter
      this.secondCharacter = data.secondCharacter
  }
}

