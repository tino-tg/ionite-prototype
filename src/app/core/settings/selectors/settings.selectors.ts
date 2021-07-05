import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppState } from '../../core.state'
import { SettingsState } from '../types/setting'

export const stateSettings = 'settings'

export const selectSettingsFeature = createFeatureSelector<AppState, SettingsState>(
  stateSettings,
)

export const selectSettingsState = createSelector(
  selectSettingsFeature,
  (state: SettingsState) => state,
)

export const selectSettingsTheme = createSelector(
  selectSettingsState,
  settings => settings.theme,
)

export const selectSettingsNavigationCollapse = createSelector(
  selectSettingsState,
  settings => settings.navigationCollapsed,
)
