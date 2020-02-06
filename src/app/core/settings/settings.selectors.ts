import { createSelector } from '@ngrx/store';

import { SettingsState } from './settings.model';
import { selectSettingsState } from '../core.state';

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectSettingsLanguage = createSelector(
  selectSettings,
  (state: SettingsState) => state.language
);

export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme
);

export const selectPageAnimations = createSelector(
  selectSettings,
  settings => settings.pageAnimations
);

export const selectElementsAnimations = createSelector(
  selectSettings,
  settings => settings.elementsAnimations
);

export const selectHour = createSelector(
  selectSettings,
  settings => settings.hour
);

export const selectEffectiveTheme = createSelector(
  selectTheme,
  (theme) => theme.toLowerCase()
);
