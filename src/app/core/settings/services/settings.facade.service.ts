import { Injectable } from '@angular/core'
import { Store, Action, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { State, Theme } from '../types/setting'
import { selectSettingsNavigationCollapse, selectSettingsTheme } from '../selectors/settings.selectors'

@Injectable()
export class SettingsFacadeService {
	theme$: Observable<Theme>
  navigationCollapsed$: Observable<boolean>

  constructor(private store: Store<State>) {

	  this.theme$ = store.pipe(select(selectSettingsTheme))
    this.navigationCollapsed$ = store.pipe(select(selectSettingsNavigationCollapse))
  }

  dispatch(action: Action) {
	  this.store.dispatch(action)
  }
}
