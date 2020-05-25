import { Player } from '../../../types/player';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { faCopy, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Game } from 'app/types/game';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'roleame-webapp-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GamesComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  currentUser: string = '';

  @Input()
  games: Game[] = []

  @Output()
  edit = new EventEmitter<Game>();

  @Output()
  delete = new EventEmitter<Game>();

  @Output()
  start = new EventEmitter<Game>();

  @Output()
  leave = new EventEmitter<Player>();

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUser = user.username;
    }).catch(err => console.error(err));
  }

  invitationAccepted(game: Game){
    if ( game.owner == this.currentUser) return true;
    return !game.players.find( gameMember => gameMember.playerID === this.currentUser ).pendingInvite
  }

  ngOnInit() {
    
  }

  editGame(game: Game){
    this.edit.emit(game)
  }

  deleteGame(game: Game){
    this.delete.emit(game)
  }

  startGame(game: Game){
    this.start.emit(game)
  }

  leaveGame(game: Game){
    this.leave.emit(game.players.find( gameMember => gameMember.playerID === this.currentUser))
  }

}
