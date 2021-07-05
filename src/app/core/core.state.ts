import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'

import { RouterStateUrl, stateRouter } from './router'
import { stateUi, uiReducer, UiState } from './ui'
import { settingsReducer, SettingsState, stateSettings } from './settings'
import { initStateFromLocalStorage } from './meta-reducers'

export type AppState = {
	[stateRouter]: RouterReducerState<RouterStateUrl>,
	[stateUi]: UiState,
  [stateSettings]: SettingsState,
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducer,
  settings: settingsReducer,
}

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage,
]

export const testAppState: AppState = {
  [stateRouter]: {} as any,
  [stateUi]: {} as any,
  [stateSettings]: {} as any,
}
