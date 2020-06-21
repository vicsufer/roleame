import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'app/core/services/API.service';
import { Game } from 'app/types/game';
import { Tabletop } from 'app/types/tabletop';
import { AmplifyService } from 'aws-amplify-angular';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Player } from '../../../types/player';


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
     private router: Router) {
  }

  ngOnInit() {


    
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username;

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
      console.error(err)
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
      console.error(err)
    })
      
    }).catch(err => console.error(err));
  }

  invitationAccepted(game: Game){
    return !game.players.find( gameMember => gameMember.playerID === this.currentUsername ).pendingInvite
  }

  setEditableGame(game: Game){
    this.selectedEditableGame = game
    this.selectedTabIndex = 2
  }

  deleteGame(game: Game){
    this.apiService.DeleteGameData({id: game.id}).then( (deletedGame) => {
      //Delete all players in this game.

      deletedGame.players.items.forEach( player => {
          this.apiService.DeletePlayerRetrieveID({id:player.id}).then( (res) => {}).catch(e=>console.error(e))
        })

      //Delete tabletop and its characters
      this.apiService.DeleteTabletop({id:game.tabletop.id}).then( (deletedTabletop) => {
        this.games = this.games.filter(  c => c.id != game.id  )
        deletedTabletop.characters.items.forEach( tabletopCharacter => {
          this.apiService.DeleteTabletopCharacter({id:tabletopCharacter.id})
        })
      }).catch(e=>console.error(e))
    }).then( (res) => {
    }).catch( e => {
      console.error(e)
    })
    
  }

  invitePlayer(username: string, game: string, gameOwner: string){
    this.apiService.CreatePlayer({gameOwnerID: gameOwner, playerID: username, gameID: game, pendingInvite: true})
    .then( (res) => {})
    .catch( (e=>{console.error(e)}));
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
        var g: Game | any
        g = createdGame
        g.players = createdGame.players.items
        g.members = createdGame.members
        this.games.push(g)
        this.selectedTabIndex = 0

        data.members.forEach( (member) => {
          this.invitePlayer(member, createdGame.id, createdGame.owner)
        })
      }).catch( e => {
        console.error(e)
      })

    }).catch(e=>console.error(e))
  }


  applyChanges(data: {game: Game, playersToRemove: string[], playersToInvite: Player[]}){


    data.playersToRemove.forEach( (player) => {
      this.apiService.DeletePlayer({id: player}).then( res => {}).catch((e) => console.error(e))
    })
    data.playersToInvite.forEach( player => {
      this.invitePlayer( player.playerID, data.game.id, data.game.owner)
    })

    console.log(data.game)

    this.apiService.UpdateGame(data.game).then( (updatedGame) => {
      var gameToUpdate: Game | any = this.games.find( game => game.id == data.game.id )
      gameToUpdate = updatedGame;
      gameToUpdate.name = updatedGame.name;
      gameToUpdate.description = gameToUpdate.description;
      gameToUpdate.players = updatedGame.players.items;
      gameToUpdate.members = updatedGame.members;
      gameToUpdate.tabletop = updatedGame.tabletop;
      this.selectedEditableGame = undefined;
      this.selectedTabIndex = 0
    }).catch( e => {
      console.error(e)
    })
  }

  acceptInvitation(gameMember: Player){
    this.apiService.UpdatePlayer(gameMember).then( (res) => {
      this.invitations = this.invitations.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
    }).catch( (e) => console.error(e))
  }

  leaveGame(gameMember: Player){
    this.apiService.DeletePlayer( {id: gameMember.id} ).then( res => {
      this.games = this.games.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
    }).catch(e =>console.error(e))
  }

  rejectInvitation(gameMember: Player){
    this.apiService.DeletePlayer( {id: gameMember.id} ).then( res => {
      this.invitations = this.invitations.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
      //this.games = this.games.filter(  game => !game.players.find( (member: Player) => member.id === gameMember.id) )
    }).catch(e =>console.error(e))
  }

  startGame(game: Game){
    this.router.navigate(['/tabletop'], {queryParams:{ tabletopID: game.tabletop.id }})
  }

}
