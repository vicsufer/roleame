import { initialState, settingsReducer } from './settings.reducer';

import {
  ActionSettingsChangeLanguage
} from './settings.actions';

describe('SettingsReducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const state = settingsReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update language', () => {
    const action = new ActionSettingsChangeLanguage({ language: 'en' });
    const state = settingsReducer(undefined, action);
    expect(state.language).toEqual('en');
  });

});
