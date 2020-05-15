import { ActionAuthLogin, ActionAuthLogout } from './auth.actions';

describe('Auth Actions', () => {
  it('should create ActionAuthLogin action', () => {
    const action = new ActionAuthLogin();
    expect(action.type).toEqual('[Auth] Login');
  });

  it('should create ActionAuthLogout action', () => {
    const action = new ActionAuthLogout();
    expect(action.type).toEqual('[Auth] Logout');
  });
});
