import { initialState, uiReducer } from './ui.reducer'
import * as fromUiActions from '../actions/ui.actions'

describe('UI Reducer', () => {

  describe('with a valid initial state', () => {
    it('should return the initial state', () => {
      const action = {} as any
      const state = uiReducer(undefined, action)

      expect(state).toBe(initialState)
    })

    it('should set readRequestLoading to true on ReadRequestLoadingStart action', () => {
      const action = fromUiActions.actionUiReadRequestLoadingStart()
      const state = uiReducer(initialState, action)

      expect(state.readRequestLoading).toBe(true)
    })

    it('should set readRequestLoading to false on ReadRequestLoadingStop action', () => {
      const action = fromUiActions.actionUiReadRequestLoadingStop()
      const state = uiReducer(initialState, action)

      expect(state.readRequestLoading).toBe(false)
    })

    it('should set writeRequestLoading to true on WriteRequestLoadingStart action', () => {
      const action = fromUiActions.actionUiWriteRequestLoadingStart()
      const state = uiReducer(initialState, action)

      expect(state.writeRequestLoading).toBe(true)
    })

    it('should set writeRequestLoading to false on WriteRequestLoadingStop action', () => {
      const action = fromUiActions.actionUiWriteRequestLoadingStop()
      const state = uiReducer(initialState, action)

      expect(state.writeRequestLoading).toBe(false)
    })
  })
})
