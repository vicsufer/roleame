import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'app/types/game';
import { AmplifyService } from 'aws-amplify-angular';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Player } from '../../../types/player';


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
