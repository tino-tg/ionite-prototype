import { AppState } from '../../core.state'

export interface UiState {
	readRequestLoading: boolean,
	writeRequestLoading: boolean,
}

export interface State extends AppState {
	ui: UiState,
}

export const testUiState: UiState = {
  readRequestLoading: false,
  writeRequestLoading: false,
}
