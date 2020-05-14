import { FileValidator } from 'ngx-material-file-input';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, Inject } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Character } from 'app/types/character';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'roleame-webapp-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class EditCharacterComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  _character: Character
  imageEdited = false;

  @Output() applyChanges: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() changeImage: EventEmitter<{portrait:string, imageFile: File}> = new EventEmitter<{portrait:string, imageFile: File}>();

  @Input()
  set character(character: Character){
    this._character = character
    if(character){
      this.editCharacterForm.patchValue(character)
      this.character.abilities.forEach( (ability) => {
        var abilityForm = this.createAbility()
        abilityForm.setValue(ability)
        this.characterAbilities.push(abilityForm);
      })
    }
    
  }

  get character(){
    return this._character
  }

  maxAttrValue = 20
  editCharacterForm: FormGroup
  characterAbilities: FormArray

  constructor(private apiService: APIService, private formBuilder: FormBuilder, public changePortraitDialog: MatDialog,) {

  }

  ngOnInit() {
    
    this.editCharacterForm = this.formBuilder.group({
      name: ['', Validators.required],
      class: [],
      background: ['', Validators.maxLength(500)],

      agility: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      hitPoints: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)] ],
      fellowship: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      strength: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      wisdom: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      abilities: this.formBuilder.array([]),
      portrait: [''],
    })
    this.characterAbilities = this.editCharacterForm.get('abilities') as FormArray;
    
  }

  addAbility(): void {
    this.characterAbilities.push(this.createAbility());
  }

  removeAbility(i : number): void {
    this.characterAbilities.removeAt(i)
  }

  createAbility(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description:['', Validators.maxLength(500)],
    });
  }

  editCharacter() {
    Object.assign(this.character , this.editCharacterForm.value )
    this.applyChanges.emit(this.character)
  }
  changePortrait(){
    this.openDialog()
  }


  openDialog(): void {
    var imageForm = this.formBuilder.group({
      //Allow upload of 1Mb,to Bytes
      type: ['', Validators.required],
      imageValueURL:[''],
      imageValue: ['',FileValidator.maxContentSize(1 * 2**20)],
    }); 
    
    
    const dialogRef = this.changePortraitDialog.open(ChangePortraitDialog, {
      width: '50%',
      data: {
        imageForm: imageForm
    }});
    console.log(dialogRef)

    dialogRef.afterClosed().subscribe(result => {
      //TODO Result character.portrati != imageForm.controls.value && not button cancelled => imageEdit=true
      var portrait, imageToUpload
      if(result){
        switch( result.imageValue.type ){
          case 'url':
            portrait = result.imageValue.imageValueURL
            break;
          case 'upload':
            imageToUpload = result.imageFile
            portrait = `portraits/${this.character.uuid}`
            break;
          case 'none':
            portrait = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            //portrait = `portraits/none`
            //TODO USE CUSTOM USER FROM S3
            break;
        }
        this.changeImage.emit({portrait: portrait, imageFile: imageToUpload})
      }
    });
  }
}



export interface ChangePortraitData {
  imageForm: FormGroup,
}

@Component({
  selector: 'change-portrait-dialog',
  templateUrl: 'change-portrait.dialog.html',
  styleUrls: ['change-portrait.dialog.scss']
})
export class ChangePortraitDialog {

  imageForm: FormGroup
  imageToUpload: File

  constructor(
    public dialogRef: MatDialogRef<ChangePortraitDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ChangePortraitData) {
      this.imageForm = data.imageForm
    }

  save(): void {
    this.dialogRef.close( {imageValue: this.imageForm.value, imageFile: this.imageToUpload});
  }

  close(): void {
    this.dialogRef.close();
  }
  

  uploadImage(imageEvent) {
    this.imageToUpload = imageEvent.target.files[0]
  }

}
