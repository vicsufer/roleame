import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'roleame-webapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  logo = require('assets/logo.png');

  currentUser: String;

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUser = user.username;
    }).catch(err => {});
  }

  ngOnInit() {}
}
