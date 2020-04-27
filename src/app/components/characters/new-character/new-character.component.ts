import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Character } from 'app/types/character';

@Component({
  selector: 'roleame-webapp-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewCharacterComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  maxAttrValue = 20

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
      type: ['', Validators.required],
      imageValue: [''],
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
    this.abilities.removeAt(0)
  }

  createAbility(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      description:['', Validators.maxLength(500)],
    });
  }


  createCharacter(): Character {
    var character: Character
    
    character = {
      name: this.basicInfoForm.get("name").value,
      class: this.basicInfoForm.get("class").value,
      background: this.basicInfoForm.get("background").value,

      //portrait?: string;

      agility: this.attributesForm.get("agility").value,
      hitPoints: this.attributesForm.get("hitPoints").value,
      fellowship: this.attributesForm.get("fellowship").value,
      strength: this.attributesForm.get("strength").value,
      wisdom: this.attributesForm.get("wisdom").value,

      abilities: []
    }
    console.log(this.abilities)
    this.abilities.controls.forEach( ability => {
      character.abilities.push({name: ability.get("name").value, description: ability.get("description").value})
    })

    console.log(character)
    return character
  }

}
