import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { PlayerCharacter } from 'app/types/playerCharacter';
import { faCopy, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Character } from 'app/types/character';

@Component({
  selector: 'roleame-webapp-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CharactersComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @Input()
  characters: Character[] = []

  @Output()
  edit = new EventEmitter<Character>();

  @Output()
  delete = new EventEmitter<Character>();

  constructor(private apiService: APIService) {

  }

  ngOnInit() {
    
  }

  editCharacter(character: Character){
    this.edit.emit(character)
  }

  deleteCharacter(character: Character){
    this.delete.emit(character)
  }

}
