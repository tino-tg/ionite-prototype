import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { UiFacadeService } from './services/ui.facade.service'

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  declarations: [],
  providers: [
    // highlight options token can only be imported in an eager module
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
    UiFacadeService,
  ],
  exports: [],
})
export class UiModule {
}
