import { Action } from '@ngrx/store';
import { State, AuthStateTypes } from './auth.models';

export enum AuthActionTypes {
  AUTH_LOGIN = '[Auth] Login',
  AUTH_LOGOUT = '[Auth] Logout',
  AUTH_SETUSER = '[Auth] Set User'
}

export class ActionAuthLogin implements Action {
  readonly type = AuthActionTypes.AUTH_LOGIN;
  constructor() {}
}
export class ActionAuthLogout implements Action {
  readonly type = AuthActionTypes.AUTH_LOGOUT;
  constructor() {}
}

export class ActionAuthSetUser implements Action {
  readonly type = AuthActionTypes.AUTH_SETUSER;
  constructor(readonly payload: { user: any }) {}
}

export type AuthActions =
  | ActionAuthLogin
  | ActionAuthLogout
  | ActionAuthSetUser;
