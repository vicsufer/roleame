import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'app/types/game';
import { AmplifyService } from 'aws-amplify-angular';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Player } from '../../../types/player';


@Component({
  selector: 'roleame-webapp-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InvitationsComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  currentUser: string = '';

  @Input()
  invitations: Game[] = []

  @Output()
  accept = new EventEmitter<Player>();

  @Output()
  reject = new EventEmitter<Player>();

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUser = user.username;
    }).catch(err => console.error(err));
  }

  acceptInvitation(game: Game){
    var gameMember = game.players.find( gameMember => gameMember.playerID === this.currentUser)
    gameMember.pendingInvite = false
    this.accept.emit(gameMember)
  }

  rejectInvitation(game: Game){
    this.reject.emit(game.players.find( gameMember => gameMember.playerID === this.currentUser))
  }

  ngOnInit() {
    
  }


}
