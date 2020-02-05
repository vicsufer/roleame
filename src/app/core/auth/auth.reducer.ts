import { createReducer, on, Action } from '@ngrx/store';
import {
  AuthState,
  AmplifyService
} from 'aws-amplify-angular/dist/src/providers';
import { AuthStateTypes } from './auth.models';
import { AuthActions, AuthActionTypes } from './auth.actions';

export const initialState: AuthState = {
  user: null,
  state: AuthStateTypes.SIGNED_OUT
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN:
      return { ...state, state: AuthStateTypes.SIGNED_IN };
    case AuthActionTypes.AUTH_LOGOUT:
      return { ...initialState, state: AuthStateTypes.SIGNED_OUT };
    case AuthActionTypes.AUTH_SETUSER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
