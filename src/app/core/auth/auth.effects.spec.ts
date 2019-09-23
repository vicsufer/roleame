import * as assert from 'assert';
import { Router } from '@angular/router';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { actionAuthLogin, actionAuthLogout } from './auth.actions';
import { AuthEffects, AUTH_KEY } from './auth.effects';
import { AmplifyService } from 'aws-amplify-angular';
import { AuthStateTypes } from './auth.models';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('AuthEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: jasmine.SpyObj<Router>;
  let amplifyService: jasmine.SpyObj<AmplifyService>

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem'
    ]);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
  });

  describe('login', () => {

    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, router, amplifyService);
      const metadata = getEffectsMetadata(effect);
      expect(metadata.login.dispatch).toEqual(false);
    });

    it('should call setAuthState on AmplifyService', () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const loginAction = actionAuthLogin({user:'john doe'});
        const source = cold('a', { a: loginAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, router, amplifyService);

        effect.login.subscribe(() => {
          expect(amplifyService.setAuthState).toHaveBeenCalledWith({user:'john doe'});
        });
      });
    });
  });

  describe('logout', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, router, amplifyService);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.logout.dispatch).toEqual(false);
    });

    it('should call signOut on AmplifyService.auth() and navigate to /', () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const logoutAction = actionAuthLogout();
        const source = cold('a', { a: logoutAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, router, amplifyService);

        effect.login.subscribe(() => {
          expect(amplifyService.auth().signOut).toHaveBeenCalled();
          expect(router.navigate).toHaveBeenCalledWith(['/']);
        });
      });
    });
  });
});
