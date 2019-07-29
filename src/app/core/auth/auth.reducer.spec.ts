import { authReducer, initialState } from './auth.reducer';
import { actionAuthLogin, actionAuthLogout } from './auth.actions';
import { AuthState } from './auth.models';

describe('AuthReducer', () => {
  
  const TEST_INITIAL_STATE: AuthState = {
    isAuthenticated: false,
    username: null,
    id: null,
    email: null
  };

  it('should return default state', () => {
    const action = {} as any;
    const state = authReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set authentication to true on login', () => {
    const action = actionAuthLogin({email:'John@doe.com', password: 'verysecure'});
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isAuthenticated).toBe(true);
  });

  it('should set authentication to false on logout', () => {
    const action = actionAuthLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isAuthenticated).toBe(false);
  });
});
