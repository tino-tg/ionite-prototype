import { Injectable } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'
import { select, Store } from '@ngrx/store'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { merge, of } from 'rxjs'
import { tap, withLatestFrom } from 'rxjs/operators'

import { LocalStorageService } from '../../storage'
import { State } from '../types/setting'
import { selectSettingsFeature } from '../selectors/settings.selectors'
import { actionSettingsChangeTheme, actionSettingsToggleNavigationCollapse } from '../actions/settings.actions'
import { selectSettingsTheme } from '../selectors/settings.selectors'

export const SETTINGS_KEY = 'SETTINGS'
const INIT = of('init-effect-trigger')

@Injectable()
export class SettingsEffects {
  constructor(
		private actions$: Actions,
		private store: Store<State>,
		private overlayContainer: OverlayContainer,
		private localStorageService: LocalStorageService,
  ) {
  }

	effectPersistSettings = createEffect(() =>
	  this.actions$.pipe(
	    ofType(
	      actionSettingsChangeTheme,
	      actionSettingsToggleNavigationCollapse,
	    ),
	    withLatestFrom(
	      this.store.pipe(select(selectSettingsFeature)),
	    ),
	    tap(([
	      action,
	      settings,
	    ]) =>
	      this.localStorageService.setItem(SETTINGS_KEY, settings),
	    ),
	  ),
	{ dispatch: false },
	)

	effectChangeTheme = createEffect(() =>
	  merge(INIT, this.actions$.pipe(
	    ofType(
	      actionSettingsChangeTheme))).pipe(
	    withLatestFrom(
	      this.store.pipe(select(selectSettingsTheme)),
	    ),
	    tap(([
	      action,
	      effectiveTheme,
	    ]) => {
	      const classList = this.overlayContainer.getContainerElement().classList
	      const toRemove = Array.from(classList).filter((item: string) =>
	        item.includes('-theme'),
	      )
	      if (toRemove.length) {
	        classList.remove(...toRemove)
	      }
	      classList.add(effectiveTheme + '-theme')
	    }),
	  ), { dispatch: false },
	)
}
