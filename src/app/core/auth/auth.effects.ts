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
        tap(user => {
          this.localStorageService.setItem(AUTH_KEY, {
            user,
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
          this.localStorageService.setItem(AUTH_KEY, {
            user: null,
            isAuthenticated: false
          });
          this.router.navigate(['']);
          await this.amplifyService.auth().signOut();
        })
      ),
    { dispatch: false }
  );
}
