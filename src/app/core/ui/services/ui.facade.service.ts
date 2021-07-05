import { Injectable } from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'
import { Store, Action, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { UiState } from '../types'
import * as fromUiSelectors from '../selectors/ui.selectors'
import { mobileBreakpointWidth } from './ui.constants.service'

@Injectable()
export class UiFacadeService {

	isMobile$: Observable<boolean>

	readRequestLoading$: Observable<boolean>
	writeRequestLoading$: Observable<boolean>

	constructor(
		private breakpointObserver: BreakpointObserver,
		private store: Store<UiState>,
	) {
	  // detect mobile device with the help of devices width and provide it as observable
	  this.isMobile$ = this.breakpointObserver.observe(`(max-width: ${mobileBreakpointWidth}px)`).pipe(
	    map(result => {
	      return result.matches
	    }),
	  )

	  // provide "read" request loading state (GET, HEAD, OPTIONS)
	  this.readRequestLoading$ = store.pipe(select(fromUiSelectors.selectReadRequestLoading))

	  // provide "write" request loading state (POST, PUT, PATCH, DELETE)
	  this.writeRequestLoading$ = store.pipe(select(fromUiSelectors.selectWriteRequestLoading))
	}

	dispatch(action: Action) {
	  this.store.dispatch(action)
	}
}
