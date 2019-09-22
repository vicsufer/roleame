import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { actionAuthLogin, actionAuthLogout } from './auth.actions';
import { AmplifyService } from 'aws-amplify-angular';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router,
    private amplifyService: AmplifyService
  ) {}

  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionAuthLogin),
        tap(() => {
          console.log(actionAuthLogin);
          this.localStorageService.setItem(AUTH_KEY, {
            user: actionAuthLogin,
            isAuthenticated: true
          });
        })
      ),
    { dispatch: false }
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionAuthLogout),
        tap(async () => {
          this.router.navigate(['']);
          await this.amplifyService.auth().signOut();
          this.localStorageService.setItem(AUTH_KEY, {
            user: null,
            isAuthenticated: false
          });
        })
      ),
    { dispatch: false }
  );
}
