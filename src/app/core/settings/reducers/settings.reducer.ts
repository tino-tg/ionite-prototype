import { Action, createReducer, on } from '@ngrx/store'

import { SettingsState } from '../types/setting'
import { actionSettingsChangeTheme, actionSettingsToggleNavigationCollapse } from '../actions/settings.actions'

export const initialState: SettingsState = {
  theme: 'default',
  navigationCollapsed: false,
}

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    actionSettingsToggleNavigationCollapse,
    (state, action) => ({ ...state, ...action }),
  ),
)

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action,
) {
  return reducer(state, action)
}
