import { Action, createReducer, on } from '@ngrx/store'

import { UiState } from '../types'
import * as fromUiActions from '../actions/ui.actions'

export const initialState: UiState = {
  readRequestLoading: false,
  writeRequestLoading: false,
}

const reducer = createReducer(
  initialState,
  on(
    fromUiActions.actionUiReadRequestLoadingStart,
    (state) => ({
      ...state,
      readRequestLoading: true,
    }),
  ),
  on(
    fromUiActions.actionUiReadRequestLoadingStop,
    (state) => ({
      ...state,
      readRequestLoading: false,
    }),
  ),
  on(
    fromUiActions.actionUiWriteRequestLoadingStart,
    (state) => ({
      ...state,
      writeRequestLoading: true,
    }),
  ),
  on(
    fromUiActions.actionUiWriteRequestLoadingStop,
    (state) => ({
      ...state,
      writeRequestLoading: false,
    }),
  ),
)

export function uiReducer(
  state: UiState | undefined,
  action: Action,
) {
  return reducer(state, action)
}
