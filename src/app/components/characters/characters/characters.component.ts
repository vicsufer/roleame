import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { PlayerCharacter } from 'app/types/PlayerCharacter';
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

  characters: Character[] = []

  faCopy = faCopy
  faUserEdit = faUserEdit

  @Output()
  edit = new EventEmitter<Character>();

  @Output()
  delete = new EventEmitter<Character>();

  constructor(private apiService: APIService) {

  }

  ngOnInit() {
    this.apiService.ListPlayerCharacters().then( (characters ) => {
      characters.items.forEach( character => this.characters.push(character) )
    }).catch( (err) => {
      console.log(err)
    })
  }

  editCharacter(character: Character){
    this.edit.emit(character)
  }

  deleteCharacter(character: Character){
    this.delete.emit(character)
  }

 async  newCharacter() {
   var a = new PlayerCharacter()
   a.name = "Vanya"
   a.class = "Advisor"
   a.background = "Advisor of the emperor grew"
   a.portrait = "https://vignette.wikia.nocookie.net/xesteria/images/d/d9/BorusCordona.jpg/revision/latest?cb=20180618214000"
   a.abilities = [ {
     name: "Schemer",
     description: "This character enjoys plotting, receive a bonus in fellowship when scheming."
   }]
   this.apiService.CreatePlayerCharacter(a).then( () => {
      console.log("characterCreaded")
   }).catch(err => {
     console.log(err)
   })

 }

}
