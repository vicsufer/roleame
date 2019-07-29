import { createSelector } from '@ngrx/store';

import { selectAuthState } from '../core.state';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';

import { AuthStateTypes} from './auth.models';

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.state == AuthStateTypes.SIGNED_IN
);
