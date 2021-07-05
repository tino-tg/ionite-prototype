import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { MarkdownModule, MarkedOptions } from 'ngx-markdown'

import { environment } from '../../environments/environment'
import { metaReducers, reducers } from './core.state'
import { UiModule } from './ui'
import { StorageModule } from './storage'
import { SettingsEffects, SettingsModule } from './settings'
import { markedOptionsFactory } from './markdown'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      SettingsEffects,
    ]),

    // redux dev tools
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: environment.appName }),

    // core markdown rendering config
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),

    // local- and session-storage and cookies services
    StorageModule,

    // ui core module - holding ui state and providing ui services
    UiModule,

    // app settings
    SettingsModule,
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule')
    }
  }
}
