import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { faCopy, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import { from } from 'rxjs';
import { Character } from 'app/types/character';

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

  constructor(private apiService: APIService ) {

  }

  ngOnInit() {
    
  }

  setEditableCharacter(character: Character){
    this.selectedEditableCharacter = character
    this.selectedTabIndex = 2
  }

  deleteCharacter(character: Character){

  }

}
