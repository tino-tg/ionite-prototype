import { testTheme } from '../types/setting'
import { initialState, settingsReducer } from './settings.reducer'
import { actionSettingsChangeTheme } from '../actions/settings.actions'

describe('Settings Reducer', () => {
  it('should return default state', () => {
    const action = {} as any
    const state = settingsReducer(undefined, action)

    expect(state).toBe(initialState)
  })

  it('should update theme', () => {
    const action = actionSettingsChangeTheme({ theme: testTheme })
    const state = settingsReducer(undefined, action)

    expect(state.theme).toEqual(testTheme)
  })
})
