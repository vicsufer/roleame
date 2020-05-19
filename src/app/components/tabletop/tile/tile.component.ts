import { Token } from './../../../types/token';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, ChangeDetectorRef } from '@angular/core';

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

  @ViewChild('tile', {static: false}) tileElement: ElementRef;

  @Input()
  _token: Token

  @Input()
  position: number

  @Output()
  tileSelect: EventEmitter<{position: number , token: Token}> = new EventEmitter<{position: number , token: Token}>()

  nearTop: boolean = true
  nearLeft: boolean = true
  nearBottom: boolean = false
  nearRight: boolean = false

  @Input()
  set token(token: Token){
    this._token = token
    // if(this.tileElement && this.token.character){
    //   this.calculateBounds()
    // }
  }

  get token(){
    return this._token;
  }

  constructor(){
    
  }
  
  ngOnInit() {
    // setInterval(() => {
    //   this.calculateBounds()
    // }, 5000 )
  }

  ngAfterViewInit(){
  }
  
  tileSelected() {
    this.tileSelect.emit( {position: this.position, token: this.token} )
  }

  calculateBounds() {
    // var domRect = this.tileElement.nativeElement.getBoundingClientRect();
    // var spaceBelow = window.innerHeight - domRect.bottom;
    // this.nearTop = spaceBelow > 150
    // this.nearBottom = !this.nearTop;
    // console.log(this.nearTop)
  }

}
