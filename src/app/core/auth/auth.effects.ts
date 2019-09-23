import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions, Effect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { actionAuthLogin, actionAuthLogout } from './auth.actions';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthStateTypes } from './auth.models';

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
        ofType(actionAuthLogin),
        tap(action => {
          //TODO:
          //USAR AmplifyService.auth() get currentCredentials para poner el email en el estado independientemente del proveedor.
          this.router.navigate(['/']);
          this.amplifyService.setAuthState({
            user: action.user,
            state: AuthStateTypes.SIGNED_IN
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
          this.router.navigate(['/']);
          await this.amplifyService.auth().signOut();
        })
      ),
    { dispatch: false }
  );
}
