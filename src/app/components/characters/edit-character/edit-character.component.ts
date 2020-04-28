import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { PlayerCharacter } from 'app/types/playerCharacter';
import { faCopy, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Character } from 'app/types/character';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Ability } from 'app/types/ability';

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

  @Output() applyChanges: EventEmitter<Character> = new EventEmitter<Character>();
  @Input()
  set character(character: Character){
    this._character = character
    console.log(character)
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

  constructor(private apiService: APIService, private formBuilder: FormBuilder) {

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
}
