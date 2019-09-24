import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  AUTH_LOGIN = '[Auth] Login',
  AUTH_LOGOUT = '[Auth] Logout',
}

export class ActionAuthLogin implements Action {
  readonly type = AuthActionTypes.AUTH_LOGIN;

  constructor(readonly payload: { user: any }) {}
}

export class ActionAuthLogout implements Action {
  readonly type = AuthActionTypes.AUTH_LOGOUT;

  constructor() {}
}


export type AuthActions =
  | ActionAuthLogin
  | ActionAuthLogout
