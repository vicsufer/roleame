import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APIService } from 'app/core/services/API.service';
import { Character } from 'app/types/character';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';


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
