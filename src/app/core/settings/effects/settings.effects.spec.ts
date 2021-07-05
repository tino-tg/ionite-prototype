// @ts-ignore
import { strict as assert } from 'assert'

import { OverlayContainer } from '@angular/cdk/overlay'
import { Actions, getEffectsMetadata } from '@ngrx/effects'
import { TestScheduler } from 'rxjs/testing'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'

import { AppState } from '../../core.state'
import { SettingsState } from '../types/setting'
import { SettingsEffects, SETTINGS_KEY } from './settings.effects'
import { actionSettingsChangeTheme } from '../actions/settings.actions'
import { LocalStorageService } from '../../storage'

const scheduler = new TestScheduler((actual, expected) =>
  assert.deepStrictEqual(actual, expected),
)

describe('Settings Effects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>
  let overlayContainer: jasmine.SpyObj<OverlayContainer>
  let store: jasmine.SpyObj<Store<AppState>>

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem',
    ])
    overlayContainer = jasmine.createSpyObj('OverlayContainer', [
      'getContainerElement',
    ])
    store = jasmine.createSpyObj('store', [
      'pipe',
    ])
  })

  describe('effectPersistSettings', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions()
      const effect = new SettingsEffects(
        actions,
        store,
        overlayContainer,
        localStorageService,
      )
      const metadata = getEffectsMetadata(effect)

      // @ts-ignore
      expect(metadata.effectPersistSettings.dispatch).toEqual(false)
    })
  })

  it('should call methods on LocalStorageService for PERSIST action', () => {
    scheduler.run(helpers => {
      const { cold } = helpers

      const settings: SettingsState = {
        theme: 'default',
        navigationCollapsed: false,
      }
      store.pipe.and.returnValue(of(settings))
      const persistAction = actionSettingsChangeTheme({ theme: 'default' })
      const source = cold('a', { a: persistAction })
      const actions = new Actions(source)
      const effect = new SettingsEffects(
        actions,
        store,
        overlayContainer,
        localStorageService,
      )

      effect.effectPersistSettings.subscribe(() => {
        expect(localStorageService.setItem).toHaveBeenCalledWith(
          SETTINGS_KEY,
          settings,
        )
      })
    })
  })
})
