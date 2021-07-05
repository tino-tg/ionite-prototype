import { createAction, props } from '@ngrx/store'

import { Theme } from '../types/setting'

export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: Theme }>(),
)

export const actionSettingsToggleNavigationCollapse = createAction(
  '[Settings] Toggle Navigation Collapse',
  props<{ navigationCollapsed: boolean }>(),
)
