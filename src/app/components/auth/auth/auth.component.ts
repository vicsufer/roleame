import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';
import { Observable } from 'rxjs';
import { State } from '../../../core/auth/auth.models';
import { ROUTE_ANIMATIONS_ELEMENTS, selectAuth } from '../../../core/core.module';


@Component({
  selector: 'roleame-webapp-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  authState$: Observable<AuthState>;

  showSignup: boolean;

  constructor(private store: Store<State>) {
    var a = this.store.pipe(select(selectAuth));
    //this.authState$ = this.store.pipe(  selectIsAuthenticated );
  }

  ngOnInit() {
  }


  toggleSignup() {
    this.showSignup = !this.showSignup;
  }


}
