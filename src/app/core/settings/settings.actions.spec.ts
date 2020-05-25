import {
  ActionSettingsChangeAnimationsElements,
  ActionSettingsChangeAnimationsPage,
  ActionSettingsChangeHour,
  ActionSettingsChangeLanguage,
  SettingsActionTypes
} from './settings.actions';

describe('Settings Actions', () => {


  it('should create ActionSettingsChangeAnimationsElements action', () => {
    const action = new ActionSettingsChangeAnimationsElements({
      elementsAnimations: true
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS);
    expect(action.payload.elementsAnimations).toEqual(true);
  });

  it('should create ActionSettingsChangeAnimationsPage action', () => {
    const action = new ActionSettingsChangeAnimationsPage({
      pageAnimations: true
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_ANIMATIONS_PAGE);
    expect(action.payload.pageAnimations).toEqual(true);
  });

  it('should create ActionSettingsChangeLanguage action', () => {
    const action = new ActionSettingsChangeLanguage({
      language: 'en'
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_LANGUAGE);
    expect(action.payload.language).toEqual('en');
  });

  it('should create ActionSettingsChangeHour action', () => {
    const action = new ActionSettingsChangeHour({
      hour: 7
    });

    expect(action.type).toEqual(SettingsActionTypes.CHANGE_HOUR);
    expect(action.payload.hour).toEqual(7);
  });

});
