import { authReducer, initialState } from './auth.reducer';
import { ActionAuthLogin, ActionAuthLogout, ActionAuthSetUser } from './auth.actions';
import { AuthStateTypes } from './auth.models';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';

describe('AuthReducer', () => {
  const TEST_INITIAL_STATE: AuthState = {
    state: AuthStateTypes.SIGNED_OUT,
    user: null
  };

  it('should return default state', () => {
    const action = {} as any;
    const state = authReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set authentication state to "signedIn" on login', () => {
    const actionLogin = new ActionAuthLogin()
    const state = authReducer(TEST_INITIAL_STATE, actionLogin);
    expect(state.state).toBe(AuthStateTypes.SIGNED_IN);
  });

  it('should set user to "john doe" on setUser', () => {
    const action = new ActionAuthSetUser({ user: 'john doe' });
    const state = authReducer(TEST_INITIAL_STATE, action);
    expect(state.user).toEqual({ user: 'john doe' });
  });

  it('should set authentication state to "signedOut" on logout', () => {
    const action = new ActionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);
    expect(state.state).toBe(AuthStateTypes.SIGNED_OUT);
  });
  it('should reset authentication state on logout', () => {
    const action = new ActionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);
    expect(state).toEqual(TEST_INITIAL_STATE);
  });

  it('should set user to null on logout', () => {
    const action = new ActionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.user).toBeNull();
  });
});
