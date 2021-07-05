import { testAppState } from '../../core.state'
import { selectUiState, selectReadRequestLoading, stateUi } from './ui.selectors'
import { testUiState } from '../types'

describe('UI Selectors', () => {
  it('should select UI State', () => {
    const state = createUiState()
    expect(selectUiState(state)).toEqual(state.ui)
  })

  it('should select read request loading status', () => {
    const state = createUiState()
    expect(selectReadRequestLoading(state)).toBe(false)
  })
})

function createUiState() {
  const appState = testAppState

  appState[stateUi] = testUiState

  return appState
}
