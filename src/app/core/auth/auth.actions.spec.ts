import { actionAuthLogin, actionAuthLogout } from './auth.actions';

describe('Auth Actions', () => {
  it('should create ActionAuthLogin action', () => {
    const action = actionAuthLogin({user: 'Test user'});
    expect(action.type).toEqual('[Auth] Login');
  });

  it('should create ActionAuthLogout action', () => {
    const action = actionAuthLogout();
    expect(action.type).toEqual('[Auth] Logout');
  });
});
