import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthStateTypes } from './auth.models';
import { AuthActionTypes } from './auth.actions';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private amplifyService: AmplifyService
  ) {}

  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.AUTH_LOGIN),
        tap( (action) => {
          this.router.navigate(['/']);
        })
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
