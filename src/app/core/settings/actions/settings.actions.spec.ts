import { actionSettingsChangeTheme } from './settings.actions'
import { testTheme } from '../types/setting'

describe('Settings Actions', () => {
  it('should create ActionSettingsChangeTheme action', () => {
    const action = actionSettingsChangeTheme({
      theme: testTheme,
    })

    expect(action.type).toEqual('[Settings] Change Theme')
    expect(action.theme).toEqual(testTheme)
  })
})
