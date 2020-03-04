import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Character } from 'app/types/character';

@Component({
  selector: 'roleame-webapp-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CharactersComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  characters: Character[] = []

  constructor(private apiService: APIService) {

  }

  ngOnInit() {

    this.apiService.ListPlayerCharacters().then( (characters ) => {
      this.characters = characters.items
    }).catch( (err) => {
      console.log(err)
    })

  }

 async  newCharacter() {
    var ch = new Character;
    ch.name = "Kurt"
    ch.background = "A nobleman"
    this.apiService.CreatePlayerCharacter(ch).then( (character) => {
      console.log("Character created")
    }).catch((err)=> {
      console.log(err)
    })
  }

}
