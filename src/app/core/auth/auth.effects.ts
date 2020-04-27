import { selectAuthState } from './../core.state';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ofType,
  createEffect,
  Actions,
  Effect,
  ROOT_EFFECTS_INIT
} from '@ngrx/effects';
import { tap, switchMap, withLatestFrom, map, catchError } from 'rxjs/operators';

import { AmplifyService } from 'aws-amplify-angular';
import { AuthActionTypes, ActionAuthSetUser } from './auth.actions';
import { defer, Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State, AuthStateTypes } from './auth.models';
import { AUTO_STYLE } from '@angular/animations';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private amplifyService: AmplifyService,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.AUTH_LOGIN),
        withLatestFrom(this.store.pipe(select(selectAuthState))),
        tap(([action, settings])=>{
          this.amplifyService
            .auth()
            .currentUserInfo()
            .then(userInfo =>{
              this.localStorageService.setItem(AUTH_KEY, settings)
              this.store.dispatch(new ActionAuthSetUser(userInfo))
            })
            .catch(error => console.log(error))
            .finally(() => this.router.navigate(['/']))
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
          this.localStorageService.removeItem(AUTH_KEY)
          await this.amplifyService.auth().signOut();
        })
      ),
    { dispatch: false }
  );

  setUser = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.AUTH_SETUSER),
        withLatestFrom(this.store.pipe(select(selectAuthState))),
        tap(([action, settings])=>{
          this.localStorageService.setItem(AUTH_KEY, settings)
        })
      ),
    { dispatch: false }
  );
}
