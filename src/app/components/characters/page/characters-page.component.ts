import { AmplifyService } from 'aws-amplify-angular';
import { NotificationService } from './../../../core/notifications/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Character } from 'app/types/character';
import { PlayerCharacter } from 'app/types/playerCharacter';

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

  constructor(private apiService: APIService, private amplifyService: AmplifyService, private translateService: TranslateService, private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username

      this.apiService.ListPlayerCharacters({owner: {eq: this.currentUsername}}).then( (characters ) => {
        this.characters = characters.items.map( (char) => {
          if( char.portrait.startsWith('portraits/') ){
            this.amplifyService.storage().get(char.portrait, { level: 'public' })
              .then ( (url) => { 
                console.log(url)
                char.portraitURL = url
              })
              .catch( (err) => { 
                console.log(err);
              });
          }
          char.portraitURL = char.portrait;
          return char;
        })
      }).catch( (err) => {
        console.log(err)
      })
    })
  }

  setEditableCharacter(character: Character){
    this.selectedEditableCharacter = character
    this.selectedTabIndex = 2
  }

  deleteCharacter(character: PlayerCharacter){
    this.apiService.DeletePlayerCharacter({id: character.id}).then( (res) => {
      this.translateService
          .get('roleame-webapp.characters.delete.success')
          .subscribe(value => {
            this.characters = this.characters.filter(  c => c.id != character.id  )
            this.notificationService.success(value);
          });
    }).catch( e => {
      this.translateService
          .get('roleame-webapp.characters.delete.error')
          .subscribe(value => {
            this.notificationService.error(value);
          });
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
                  console.log(err);
                });
            }
          })
          .catch( (err) => { 
            console.log(err);
          });
      } else {
        createdCharacter.portraitURL = createdCharacter.portrait
      }
      this.translateService
          .get('roleame-webapp.characters.new.success')
          .subscribe(value => {
            this.characters.push(createdCharacter)
            this.notificationService.success(value);
            this.selectedTabIndex = 0
          });
    }).catch( e => {
      this.translateService
          .get('roleame-webapp.characters.new.error')
          .subscribe(value => {
            console.log(e)
            this.notificationService.error(value);
          });
    })
  }

  changeImage(data: {portrait:string, imageFile: File}){
    this.selectedEditableCharacter.portrait = data.portrait
    console.log(data)

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
              console.log(err);
            });
        }
      ).catch( (err) => { 
        console.log(err);
      });
    } else {
      this.selectedEditableCharacter.portraitURL = data.portrait
    }

    delete this.selectedEditableCharacter.owner
    this.apiService.UpdatePlayerCharacter(this.selectedEditableCharacter).then( (res) => {
    }).catch( e => {
    })

  }


  applyChanges(character: PlayerCharacter){
    delete character.owner
    this.apiService.UpdatePlayerCharacter(character).then( (res) => {
      this.translateService
          .get('roleame-webapp.characters.edit.success')
          .subscribe(value => {
            this.notificationService.success(value);
            this.selectedTabIndex = 0
            this.selectedEditableCharacter = undefined
          });
    }).catch( e => {
      this.translateService
          .get('roleame-webapp.characters.edit.error')
          .subscribe(value => {
            this.notificationService.error(value);
          });
    })
  }
  
}
