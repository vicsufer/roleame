import { State } from '../../../core/auth/auth.models';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  selectAuth
} from '../../../core/core.module';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'roleame-webapp-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  authState$: Observable<AuthState>;

  constructor(private store: Store<State>) {
    var a = this.store.pipe(select(selectAuth));
    //this.authState$ = this.store.pipe(  selectIsAuthenticated );
  }

  ngOnInit() {}
}
