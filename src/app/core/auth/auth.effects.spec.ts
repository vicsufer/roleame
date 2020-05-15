import { AppState } from './../core.state';
import { Store } from '@ngrx/store';
import { State } from 'app/core/auth/auth.models';
import * as assert from 'assert';
import { Router } from '@angular/router';
import { getEffectsMetadata, Actions } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { ActionAuthLogin, ActionAuthLogout, ActionAuthSetUser } from './auth.actions';
import { AuthEffects, AUTH_KEY } from './auth.effects';
import { AmplifyService } from 'aws-amplify-angular';

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected)
);

describe('AuthEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let router: jasmine.SpyObj<Router>;
  let amplifyService: jasmine.SpyObj<AmplifyService|any>;
  let store: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem',
      `removeItem`
    ]);
    router = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
    store = jasmine.createSpyObj('store', ['pipe']);
    amplifyService = {
      'setAuthState': jasmine.createSpy('setAuthState'),
      'auth':  jasmine.createSpy('auth').and.callFake( () => {signOut: jasmine.createSpy('signOut')})
    }
  });

  describe('login', () => {

    it('should not dispatch any action', () => {
        const actions = new Actions<ActionAuthLogin>();
        const effect = new AuthEffects(actions, router, amplifyService, store, localStorageService);
        const metadata = getEffectsMetadata(effect);

        expect(metadata.login.dispatch).toEqual(false);
    });
  });

  describe('logout', () => {
    it('should not dispatch any action', () => {
      
      const actions = new Actions(EMPTY);
      const effect = new AuthEffects(actions, router, amplifyService, store, localStorageService);
      const metadata = getEffectsMetadata(effect);
      expect(metadata.logout.dispatch).toEqual(false);
    });

    it('should call signOut on AmplifyService.auth() and navigate to /', () => {
      scheduler.run(helpers => {
        const { cold } = helpers;
        const logoutAction = new ActionAuthLogout();
        const source = cold('a', { a: logoutAction });
        const actions = new Actions(source);
        const effect = new AuthEffects(actions, router, amplifyService, store, localStorageService);
        effect.logout.subscribe(() => {
          expect(amplifyService.auth().signOut).toHaveBeenCalled();
          expect(router.navigate).toHaveBeenCalledWith(['/']);
        });
      });
    });
  });
});
