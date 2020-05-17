import { TabletopCharacter } from 'app/types/tabletopCharacter';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../../../types/player';
import { AmplifyService } from 'aws-amplify-angular';
import { NotificationService } from '../../../core/notifications/notification.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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


  @Input()
  token: TabletopCharacter

  @Input()
  position: number

  @Output()
  tileSelect: EventEmitter<{position: number , token: TabletopCharacter}> = new EventEmitter<{position: number , token: TabletopCharacter}>()
  
  ngOnInit() {

  }

  tileSelected() {
    this.tileSelect.emit( {position: this.position, token: this.token} )
  }

}
