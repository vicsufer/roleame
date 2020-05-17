import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { CreateGameInput } from './../../../core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { Router } from '@angular/router';
import { Player } from '../../../types/player';
import { AmplifyService } from 'aws-amplify-angular';
import { NotificationService } from '../../../core/notifications/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService, ListGamesQuery } from 'app/core/services/API.service';
import { Game } from 'app/types/game';

@Component({
  selector: 'roleame-webapp-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GamesPageComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  currentUsername: string;

  games: Game[] = []
  invitations: Game[] = []

  selectedTabIndex = 0;
  selectedEditableGame: Game

  constructor(
    private apiService: APIService,
     private amplifyService: AmplifyService, 
     private translateService: TranslateService, 
     private notificationService: NotificationService,
     private router: Router) {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username;
    }).catch(err => console.log(err));
  }

  ngOnInit() {
    //Retrieve games as player
    this.apiService.GetUserGamesData(this.currentUsername).then( (user) => {
      var games = user.gamesAsPlayer.items.map( (gameMember) => gameMember.game )
      games.forEach( (game) => {
        var g: Game;
        g = {
          id: game.id,
          uuid: game.uuid,
          owner: game.owner,
          name: game.name,
          description: game.description,
          members: game.members,
          players: game.players.items,
          tabletop: game.tabletop
        }
        this.games.push(g);
        if( g.owner !== this.currentUsername && !this.invitationAccepted(g)){
          this.invitations.push(g)
        }
      })
    }).catch( (err) => {
      console.log(err)
    })


    // Retrieve owned games
    this.apiService.ListGamesData({owner: {eq:this.currentUsername}}).then( (games) => {
      games.items.forEach( (game) => {
        var g: Game;
        g = {
          id: game.id,
          uuid: game.uuid,
          owner: game.owner,
          name: game.name,
          description: game.description,
          members: game.members,
          players: game.players.items,
          tabletop: game.tabletop
        }
        this.games.push(g);
      })
    }).catch( (err) => {
      console.log(err)
    })
  }



  invitationAccepted(game: Game){
    return !game.players.find( gameMember => gameMember.playerID === this.currentUsername ).pendingInvite
  }

  setEditableGame(game: Game){
    this.selectedEditableGame = game
    this.selectedTabIndex = 2
  }

  deleteGame(game: Game){
    this.apiService.DeleteGame({id: game.id}).then( (deletedGame) => {
      //Delete all players in this game.

      deletedGame.players.items.forEach( player => {
          this.apiService.DeletePlayerRetrieveID({id:player.id}).then( (res) => {}).catch(e=>console.log(e))
        })

      //Delete tabletop and its characters
      this.apiService.DeleteTabletop({id:game.tabletop.id}).then( (deletedTabletop) => {
          deletedTabletop.characters.items.forEach( tabletopCharacter => {
            this.apiService.DeleteTabletopCharacter({id:tabletopCharacter.id})
          })
      }).catch(e=>console.log(e))
    }).then( (res) => {
      this.translateService
          .get('roleame-webapp.games.delete.success')
          .subscribe(value => {
            this.games = this.games.filter(  c => c.id != game.id  )
            this.notificationService.success(value);
          });
    }).catch( e => {
      console.log(e)
      this.translateService
          .get('roleame-webapp.games.delete.error')
          .subscribe(value => {
            this.notificationService.error(value);
          });
    })
    
  }

  invitePlayer(username: string, game: string, gameOwner: string){
    this.apiService.CreatePlayer({gameOwnerID: gameOwner, playerID: username, gameID: game, pendingInvite: true})
  }


  createGame( data: {game: Game, members: string[]}){

    var tabletop: Tabletop={
      gameOwnerID: this.currentUsername,
      width: 25,
      height: 15
    }

    this.apiService.CreateTabletop( tabletop ).then( (createdTabletop) => {
      var input: Game | any = data.game
      input.gameTabletopId = createdTabletop.id

      this.apiService.CreateGame(input).then( (createdGame) => {
        data.members.forEach( (member) => {
          this.invitePlayer(member, createdGame.id, createdGame.owner)
        })
        this.translateService
            .get('roleame-webapp.games.new.success')
            .subscribe(value => {
              var g: Game | any
              g = createdGame
              g.players = createdGame.players.items
              g.members = createdGame.members
              this.games.push(g)
              this.notificationService.success(value);
              this.selectedTabIndex = 0
            });
      }).catch( e => {
        this.translateService
            .get('roleame-webapp.games.new.error')
            .subscribe(value => {
              console.log(e)
              this.notificationService.error(value);
            });
      })

    }).catch(e=>console.log(e))
  }


  applyChanges(data: {game: Game, playersToRemove: string[], playersToInvite: Player[]}){


    data.playersToRemove.forEach( (player) => {
      this.apiService.DeletePlayer({id: player}).then( res => {console.log()}).catch((e) => console.log(e))
    })
    data.playersToInvite.forEach( player => {
      this.invitePlayer( player.playerID, data.game.id, data.game.owner)
    })

    this.apiService.UpdateGame(data.game).then( (updatedGame) => {
      var gameToUpdate: Game | any = this.games.find( game => game.id == data.game.id )
      
      gameToUpdate = updatedGame
      gameToUpdate.players = updatedGame.players.items
      gameToUpdate.members = updatedGame.members
      gameToUpdate.tabletop = updatedGame.tabletop
      console.log(gameToUpdate == this.games.find( game => game.id == data.game.id ))
      this.selectedEditableGame = undefined;
      this.translateService
          .get('roleame-webapp.games.edit.success')
          .subscribe(value => {
            this.notificationService.success(value);
            this.selectedTabIndex = 0
            this.selectedEditableGame = undefined
          });
    }).catch( e => {
      console.log(e)
      this.translateService
          .get('roleame-webapp.games.edit.error')
          .subscribe(value => {
            this.notificationService.error(value);
          });
    })
  }

  acceptInvitation(gameMember: Player){
    this.apiService.UpdatePlayer(gameMember).then( (res) => {
      console.log(this.invitations)
      this.invitations = this.invitations.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
      console.log(this.invitations)
    }).catch( (e) => console.log(e))
  }

  leaveGame(gameMember: Player){
    this.apiService.DeletePlayer( {id: gameMember.id} ).then( res => {
      this.games = this.games.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
    }).catch(e =>console.log(e))
  }

  rejectInvitation(gameMember: Player){
    this.apiService.DeletePlayer( {id: gameMember.id} ).then( res => {
      this.invitations = this.invitations.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
      //this.games = this.games.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
    }).catch(e =>console.log(e))
  }


  startGame(game: Game){
    console.log(game)
    this.router.navigate(['tabletop'],{queryParams:{ tabletopID: game.tabletop.id }})
  }
}
