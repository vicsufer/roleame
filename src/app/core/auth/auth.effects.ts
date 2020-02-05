import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ofType,
  createEffect,
  Actions,
  Effect,
  ROOT_EFFECTS_INIT
} from '@ngrx/effects';
import { tap, switchMap, map, catchError } from 'rxjs/operators';

import { AmplifyService } from 'aws-amplify-angular';
import { AuthActionTypes, ActionAuthSetUser } from './auth.actions';
import { defer, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, AuthStateTypes } from './auth.models';
import { AUTO_STYLE } from '@angular/animations';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private amplifyService: AmplifyService,
    private store: Store<State>
  ) {}

  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.AUTH_LOGIN),
        switchMap(() =>
          this.amplifyService
            .auth()
            .currentUserInfo()
            .then(userInfo =>
              this.store.dispatch(new ActionAuthSetUser(userInfo))
            )
            .catch(error => console.log(error))
            .finally(() => this.router.navigate(['/']))
        )
      ),
    { dispatch: false }
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.AUTH_LOGOUT),
        tap(async () => {
          this.router.navigate(['/']);
          await this.amplifyService.auth().signOut();
        })
      ),
    { dispatch: false }
  );
}
