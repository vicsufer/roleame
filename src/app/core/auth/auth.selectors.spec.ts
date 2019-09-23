import { selectAuth, selectIsAuthenticated } from './auth.selectors';
import { AuthStateTypes } from './auth.models';

describe('Auth Selectors', () => {
  it('selectAuth', () => {
    const state = createAuthState();
    expect(selectAuth(state)).toBe(state.auth);
  });

  it('selectIsAuthenticated', () => {
    const state = createAuthState();
    expect(selectIsAuthenticated(state)).toBe(false);
  });
});

function createAuthState() {
  return {
    auth: {
      state: AuthStateTypes.SIGNED_OUT,
      user: null
    },
    settings: {} as any,
    router: {} as any
  };
}
