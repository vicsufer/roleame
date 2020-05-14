import { Player } from './../../../types/player';
import { FileValidator } from 'ngx-material-file-input';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, Inject } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Game } from 'app/types/game';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'roleame-webapp-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class EditGameComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  players: Player[]
  _game: Game

  @Output() applyChanges: EventEmitter<Game> = new EventEmitter<Game>();
  @Output() changeImage: EventEmitter<{portrait:string, imageFile: File}> = new EventEmitter<{portrait:string, imageFile: File}>();

  @Input()
  set game(game: Game){
    this._game = game
    console.log(game)
    if(game){
      this.editGameForm.patchValue(game)
      this.players = game.players
    }
    
  }

  get game(){
    return this._game
  }

  editGameForm: FormGroup
  inviteGamePlayers: FormArray

  constructor(private apiService: APIService, private formBuilder: FormBuilder, public changePortraitDialog: MatDialog,) {

  }

  ngOnInit() {
    
    this.editGameForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.maxLength(500)],
      players: this.formBuilder.array([]),
    })
    this.inviteGamePlayers = this.editGameForm.get('players') as FormArray;
    
  }

  addPlayer(): void {
    this.inviteGamePlayers.push(this.createPlayer());
  }

  removeMember(i : number): void {
    this.inviteGamePlayers.removeAt(i)
  }

  createPlayer(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      pendingInvite: ['']
    });
  }

  editGame() {
    Object.assign(this.game , this.editGameForm.value )
    this.applyChanges.emit(this.game)
  }

}
