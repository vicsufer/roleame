import { authReducer, initialState } from './auth.reducer';
import { actionAuthLogin, actionAuthLogout } from './auth.actions';
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
    const action = actionAuthLogin({user:'john doe'});
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.state).toBe(AuthStateTypes.SIGNED_IN);
  });

  it('should set user to "john doe" on login', () => {
    const action = actionAuthLogin({user:'john doe'});
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.user).toBe('john doe');
  });

  it('should set authentication state to "signedOut" on logout', () => {
    const action = actionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.state).toBe(AuthStateTypes.SIGNED_OUT);
  });

  it('should set user to null on logout', () => {
    const action = actionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.user).toBeNull();
  });

});
