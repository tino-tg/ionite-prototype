import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { SmartRoutingModule } from './smart-routing.module'
import { SmartPageComponent } from './pages/smart-page.component'


@NgModule({
  declarations: [
    //pages
    SmartPageComponent,
  ],
  imports: [
    CommonModule,
    SmartRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class SmartModule { }
