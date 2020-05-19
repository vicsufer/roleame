import { Token } from './../../../types/token';
import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../../../types/player';
import { AmplifyService } from 'aws-amplify-angular';
import { NotificationService } from '../../../core/notifications/notification.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';

@Component({
  selector: 'roleame-webapp-tabletop-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TileComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChildren('tile') tileElement: any;

  @Input()
  _token: Token

  @Input()
  position: number

  @Output()
  tileSelect: EventEmitter<{position: number , token: Token}> = new EventEmitter<{position: number , token: Token}>()

  nearTop: boolean
  nearLeft: boolean
  nearBottom: boolean
  nearRight: boolean


  @Input()
  set token(token: Token){
    this._token = token
    if(token && this.tileElement){
      this.calculateBounds()
    }
    
  }

  get token(){
    return this._token
  }
  
  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // if(this.token && this.tileElement){
    //   this.calculateBounds()
    // }
  }
  
  tileSelected() {
    this.tileSelect.emit( {position: this.position, token: this.token} )
  }

  calculateBounds() {
    var domRect = this.tileElement.first.nativeElement.getBoundingClientRect();
    var spaceBelow = window.innerHeight - domRect.bottom;
    this.nearTop = spaceBelow > 150
    this.nearBottom = !this.nearTop;
    console.log(this.nearTop)
  }

}
