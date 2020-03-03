import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';

@Component({
  selector: 'roleame-webapp-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class charactersComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;


  constructor(private apiService: APIService) {

    console.log(this.apiService)
    
  }

  ngOnInit() {

    this.apiService.ListCharacters().then( (characters ) => {
      characters.items.forEach( (character) => {
        console.log(character)
      })
    }).catch( (err) => {
      console.log(err)
    })

  }
}
