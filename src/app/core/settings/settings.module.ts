import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SettingsFacadeService } from './services/settings.facade.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    SettingsFacadeService,
  ],
  declarations: [],
  exports: [],
})
export class SettingsModule {
}
