import { authReducer, initialState } from './auth.reducer';
import { authLogin, authLogout } from './auth.actions';
import { AuthState } from './auth.models';

describe('AuthReducer', () => {
  
  const TEST_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
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
    const action = authLogin();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isLoggedIn).toBe(true);
  });

  it('should set authentication to false on logout', () => {
    const action = authLogout();
    const state = authReducer(TEST_INITIAL_STATE, action);

    expect(state.isLoggedIn).toBe(false);
  });
});
