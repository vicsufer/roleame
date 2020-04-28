import { NotificationService } from './../../../core/notifications/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { faCopy, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { from } from 'rxjs';
import { Character, CharacterUpdatable } from 'app/types/character';
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

  selectedTabIndex = 0;
  selectedEditableCharacter: Character

  constructor(private apiService: APIService, private translateService: TranslateService, private notificationService: NotificationService) {

  }

  ngOnInit() {
    
  }

  setEditableCharacter(character: Character){
    this.selectedEditableCharacter = character
    this.selectedTabIndex = 2
  }

  deleteCharacter(character: Character){

  }

  applyChanges(character: PlayerCharacter){
    //GraphQL cant update owner since its used for auth
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
