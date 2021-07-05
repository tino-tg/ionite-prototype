import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LocalStorageService } from './services/local.storage.service'
import { SessionStorageService } from './services/session.storage.service'
import { CookiesService } from './services/cookies.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    LocalStorageService,
    SessionStorageService,
    CookiesService,
  ],
  declarations: [],
  exports: [],
})
export class StorageModule {
}
