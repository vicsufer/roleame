import { FileValidator } from 'ngx-material-file-input';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Character } from 'app/types/character';
import { PlayerCharacter } from 'app/types/playerCharacter';
import { MatStepper } from '@angular/material';
import * as uuid from 'uuid';

@Component({
  selector: 'roleame-webapp-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewCharacterComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChild('stepperNewCharacter', {static: true}) stepper: MatStepper;

  maxAttrValue = 20;

  basicInfoForm: FormGroup;
  attributesForm: FormGroup;
  abilitiesForm: FormGroup;
  imageForm: FormGroup;
  abilities: FormArray;

  agility: Number;
	hitPoints: Number;
	fellowship: Number;
	strength: Number;
  wisdom: Number;

  imageToUpload: File
  
  @Output() 
  create: EventEmitter<{character: Character, imageToUpload: File}> = new EventEmitter<{character: Character, imageToUpload: File}>()

  constructor(private formBuilder: FormBuilder) {
  }



  ngOnInit() {

    this.basicInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      class: [],
      background: ['', Validators.maxLength(500)],
    });

    this.attributesForm = this.formBuilder.group({
      agility: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      hitPoints: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)] ],
      fellowship: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      strength: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]],
      wisdom: ['', [Validators.required, Validators.min(0), Validators.max(this.maxAttrValue)]]
    })

    this.abilitiesForm = this.formBuilder.group( {
      abilities: this.formBuilder.array([])
    })
    this.abilities = this.abilitiesForm.get('abilities') as FormArray;

    this.imageForm = this.formBuilder.group({
      //Allow upload of 1Mb,to Bytes
      type: ['', Validators.required],
      imageValueURL:[''],
      imageValue: ['',FileValidator.maxContentSize(1 * 2**20)],
    });

  }

  generateRandomAttributes(){
    this.attributesForm.setValue({
      agility: Math.floor(Math.random() * this.maxAttrValue+1),
      hitPoints: Math.floor(Math.random() * this.maxAttrValue+1),
      fellowship: Math.floor(Math.random() * this.maxAttrValue+1),
      strength: Math.floor(Math.random() * this.maxAttrValue+1),
      wisdom: Math.floor(Math.random() * this.maxAttrValue+1),
    })
  }

  addAbility(): void {
    this.abilities.push(this.createAbility());
  }

  removeAbility(i : number): void {
    this.abilities.removeAt(i)
  }

  createAbility(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description:['', Validators.maxLength(500)],
    });
  }

  uploadImage(imageEvent){
    this.imageToUpload = imageEvent.target.files[0]
  }

  createCharacter() {
    var character: PlayerCharacter

    var portrait = '';
    var imageType = this.imageForm.get('type').value;
    var imageToUpload = undefined
    var char_uuid = uuid.v4()
    switch (imageType) {
      case 'url':
        portrait = this.imageForm.get('imageValueURL').value
        break;
      case 'upload':
        imageToUpload = this.imageToUpload
        portrait = `portraits/${char_uuid}`
        break;
      case 'none':
        portrait = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
        //portrait = `portraits/none`
        //TODO USE CUSTOM USER FROM S3
        break;

      default:
        break;
    }
    
    character = {
      id: undefined,
      uuid: char_uuid,
      name: this.basicInfoForm.get("name").value,
      class: this.basicInfoForm.get("class").value,
      background: this.basicInfoForm.get("background").value,

      portrait: portrait,

      agility: this.attributesForm.get("agility").value,
      hitPoints: this.attributesForm.get("hitPoints").value,
      fellowship: this.attributesForm.get("fellowship").value,
      strength: this.attributesForm.get("strength").value,
      wisdom: this.attributesForm.get("wisdom").value,

      abilities: this.abilitiesForm.get('abilities').value
    }
    console.log(imageToUpload)
    this.stepper.reset()
    this.create.emit({character, imageToUpload})
  }

}
