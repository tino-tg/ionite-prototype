import { AppState } from '../../core.state'

export interface SettingsState {
	theme: Theme,
  navigationCollapsed: boolean,
}

export interface State extends AppState {
	settings: SettingsState,
}

export type Theme = 'default' | 'dark'

export const testTheme: Theme = 'dark'
