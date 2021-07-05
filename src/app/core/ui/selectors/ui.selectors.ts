import { createFeatureSelector, createSelector } from '@ngrx/store'

import { UiState } from '../types'

export const stateUi = 'ui'

export const selectUiFeature = createFeatureSelector<UiState>(
  stateUi,
)

export const selectUiState = createSelector(
  selectUiFeature,
  (state: UiState) => state,
)

export const selectReadRequestLoading = createSelector(
  selectUiFeature,
  (state: UiState) => state.readRequestLoading,
)

export const selectWriteRequestLoading = createSelector(
  selectUiFeature,
  (state: UiState) => state.writeRequestLoading,
)
