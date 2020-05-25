import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { APIService } from 'app/core/services/API.service';
import { Character } from 'app/types/character';
import { PlayerCharacter } from 'app/types/playerCharacter';
import { AmplifyService } from 'aws-amplify-angular';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';


@Component({
  selector: 'roleame-webapp-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CharactersPageComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  characters: Character[] = []

  selectedTabIndex = 0;
  selectedEditableCharacter: PlayerCharacter

  currentUsername: string;

  constructor(private apiService: APIService, private amplifyService: AmplifyService) {

  }

  ngOnInit() {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username

      this.apiService.ListPlayerCharacters({owner: {eq: this.currentUsername}}).then( (characters ) => {
        this.characters = characters.items.map( (char) => {
          if( char.portrait.startsWith('portraits/') ){
            this.amplifyService.storage().get(char.portrait, { level: 'public' })
              .then ( (url) => { 
                char.portraitURL = url
              })
              .catch( (err) => { 
                console.error(err);
              });
          }
          char.portraitURL = char.portrait;
          return char;
        })
      }).catch( (err) => {
        console.error(err)
      })
    })
  }

  setEditableCharacter(character: Character){
    this.selectedEditableCharacter = character
    this.selectedTabIndex = 2
  }

  deleteCharacter(character: PlayerCharacter){
    this.apiService.DeletePlayerCharacter({id: character.id}).then( (res) => {
      this.characters = this.characters.filter(  c => c.id != character.id  )
    }).catch( e => {
      console.error(e)
    })
  }


  createCharacter( data: {character: PlayerCharacter, imageToUpload: File}){
    data.character.owner = this.currentUsername
    this.apiService.CreatePlayerCharacter(data.character).then( (createdCharacter) => {
      if(data.imageToUpload){
          this.amplifyService.storage().put(createdCharacter.portrait, data.imageToUpload, {
            level: 'public',
            contentType: data.imageToUpload.type
          })
          .then ( (result) => { 
            if( createdCharacter.portrait.startsWith('portraits/') ){
              this.amplifyService.storage().get(createdCharacter.portrait, { level: 'public' })
                .then ( (url) => { 
                  createdCharacter.portraitURL = url
                })
                .catch( (err) => { 
                  console.error(err);
                });
            }
            this.characters.push(createdCharacter)
            this.selectedTabIndex = 0
          })
          .catch( (err) => { 
            console.error(err);
          });
      } else {
        createdCharacter.portraitURL = createdCharacter.portrait
      }
      this.characters.push(createdCharacter)
      this.selectedTabIndex = 0
    }).catch( e => {
      console.error(e)
    })
  }

  changeImage(data: {portrait:string, imageFile: File}){
    this.selectedEditableCharacter.portrait = data.portrait

    if(data.imageFile){
      this.amplifyService.storage().put(data.portrait, data.imageFile, {
        level: 'public',
        contentType: data.imageFile.type
      }).then ( (result) => { 
          this.amplifyService.storage().get(data.portrait, { level: 'public' })
            .then ( (url) => { 
              this.selectedEditableCharacter.portraitURL = url
            })
            .catch( (err) => { 
              console.error(err);
            });
        }
      ).catch( (err) => { 
        console.error(err);
      });
    } else {
      this.selectedEditableCharacter.portraitURL = data.portrait
    }

    delete this.selectedEditableCharacter.owner
    this.apiService.UpdatePlayerCharacter(this.selectedEditableCharacter).then( (res) => {
    }).catch( e => {})

  }

  applyChanges(character: PlayerCharacter){
    delete character.owner
    this.apiService.UpdatePlayerCharacter(character).then( (res) => {
      this.selectedTabIndex = 0
      this.selectedEditableCharacter = undefined
    }).catch( e => {
      console.error(e)
    })
  }
  
}
