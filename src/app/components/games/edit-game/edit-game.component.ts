import { Player } from './../../../types/player';
import { FileValidator } from 'ngx-material-file-input';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, Inject } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Game } from 'app/types/game';
import { FormGroup, FormBuilder, Validators, FormArray, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'roleame-webapp-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class EditGameComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  _game: Game
  updatedGame: Game

  @Output() applyChanges: EventEmitter<{game: Game, playersToRemove: string[], playersToInvite: Player[]}> = new EventEmitter<{game: Game, playersToRemove: string[], playersToInvite: Player[]}>();

  @Input()
  set game(game: Game){
    this._game = game
    console.log(game)
    if(game){
      this.editGameForm.patchValue(game)
      this.updatedGame = game
    }
    
  }

  get game(){
    return this._game
  }

  editGameForm: FormGroup
  invitedGamePlayers: FormArray
  playersToRemove: string[] = []

  constructor(private apiService: APIService, private formBuilder: FormBuilder, public changePortraitDialog: MatDialog,) {

  }

  ngOnInit() {
    
    this.editGameForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.maxLength(500)],
      invitedGamePlayers: this.formBuilder.array([]),
    })
    this.invitedGamePlayers = this.editGameForm.get('invitedGamePlayers') as FormArray;
  }

  removePlayer(id: string, playerID: string): void {
    this.updatedGame.players = this.updatedGame.players.filter( (player) => player.playerID != playerID )
    this.updatedGame.members = this.updatedGame.members.filter( (member) => member != playerID )
    this.playersToRemove.push(id)
  }

  addInvitedGamePlayer(): void {
    this.invitedGamePlayers.push(this.createInvitedGamePlayer());
  }

  removeInvitedGamePlayer(i : number): void {
    this.invitedGamePlayers.removeAt(i)
  }

  createInvitedGamePlayer(): FormGroup {
    return this.formBuilder.group({
      playerID: ['', {validators:[Validators.required], asyncValidators: [this.userExistsValidator().bind(this)], updateOn: 'blur'}],
      gameID:[ this.game.id, Validators.required],
      gameOwnerID: [ this.game.owner, Validators.required],
      pendingInvite: [true, Validators.required]
    });
  }

  editGame() {
    this.updatedGame.name = this.editGameForm.get('name').value
    this.updatedGame.description = this.editGameForm.get('description').value

    var playersToInvite =this.invitedGamePlayers.value as Player[]
    this.updatedGame.members = this.updatedGame.members.concat( playersToInvite.map( (player) => player.playerID )  )

    delete this.updatedGame.players
    delete this.updatedGame.tabletop

    this.applyChanges.emit({game: this.updatedGame, playersToRemove: this.playersToRemove, playersToInvite})
    this.playersToRemove = []
    this.invitedGamePlayers = new FormArray([])
  }


  userExistsValidator(): AsyncValidatorFn {
    return function (control: AbstractControl): Promise<any> | Observable<any> {
      return new Promise<any>( (resolve, reject) => {
        this.apiService.GetUserData(control.value).then( user => {
          !user? resolve({existsUser: false}): resolve(null);
        }).catch(e=>console.log(e))
      })
    }
  }

}
