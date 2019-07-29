import { createReducer, on, Action } from '@ngrx/store';
import { actionAuthLogout, actionAuthLogin } from './auth.actions';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';
import { AuthStateTypes } from './auth.models';

export const initialState: AuthState = {
  user: null,
  state: AuthStateTypes.SIGNED_OUT
};

export const authReducer = createReducer(
  initialState,
  on(actionAuthLogin, (state, action) => ({ ...state, ...action, state: AuthStateTypes.SIGNED_IN })),
  on(actionAuthLogout, (state, action) => ({ ...initialState, state: AuthStateTypes.SIGNED_OUT  }))
);