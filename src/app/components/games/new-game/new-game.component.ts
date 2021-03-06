import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { APIService } from 'app/core/services/API.service';
import { Game } from 'app/types/game';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';


@Component({
  selector: 'roleame-webapp-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewGameComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChild('stepperNewGame', {static: true}) stepper: MatStepper;

  currentUsername: string

  basicInfoForm: FormGroup;
  invitedMembersForm: FormGroup;
  invitedMembers: FormArray;

  
  @Output() 
  create: EventEmitter<{game: Game, members: String[]}> = new EventEmitter<{game: Game, members: String[]}>()

  constructor(private formBuilder: FormBuilder , private apiService: APIService) {
  }



  ngOnInit() {
    this.basicInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.maxLength(500)],
    });

    this.invitedMembersForm = this.formBuilder.group( {
      invitedMembers: this.formBuilder.array([])
    })
    this.invitedMembers = this.invitedMembersForm.get('invitedMembers') as FormArray;
  }

  addinvitedMember(): void {
    this.invitedMembers.push(this.createinvitedMember());
  }

  removeinvitedMember(i : number): void {
    this.invitedMembers.removeAt(i)
  }

  createinvitedMember(): FormGroup {
    return this.formBuilder.group({
      username: ['',{validators:[Validators.required], asyncValidators: [this.userExistsValidator().bind(this)], updateOn: 'blur'}]
    });
  }

  createGame() {
    var game: Game
    var members =this.invitedMembersForm.get('invitedMembers').value.map( (user: {username: String}) => user.username)
    
    game = {
      id: undefined,
      uuid: uuid.v4(),
      name: this.basicInfoForm.get('name').value,
      description: this.basicInfoForm.get('description').value,
      members: members
    }
    this.stepper.reset()
    this.create.emit({game, members})
  }

  userExistsValidator(): AsyncValidatorFn {
    return function (control: AbstractControl): Promise<any> | Observable<any> {
      return new Promise<any>( (resolve, reject) => {
        this.apiService.GetUserData(control.value).then( user => {
          !user? resolve({existsUser: false}): resolve(null);
        }).catch(e=>console.error(e))
      })
    }
  }
}
