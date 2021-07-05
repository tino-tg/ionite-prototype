import { Params } from '@angular/router'
import { createFeatureSelector } from '@ngrx/store'
import { RouterReducerState } from '@ngrx/router-store'

import { AppState } from '../core.state'

export const stateRouter = 'router'

export type RouterStateUrl = {
	url: string,
	params: Params,
	queryParams: Params,
}

export const selectRouterState = createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>(
  stateRouter,
)
