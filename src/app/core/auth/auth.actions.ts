import { createAction, props } from '@ngrx/store';

export const actionAuthLogin = createAction(
  '[Auth] Login',
  props<{ user: any}>()
);

export const actionAuthLogout = createAction(
  '[Auth] Logout'
);

