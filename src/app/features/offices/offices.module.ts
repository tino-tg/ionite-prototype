import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { OfficesRoutingModule } from './offices-routing.module'
import { OfficesPageComponent } from './pages/offices-page.component'


@NgModule({
  declarations: [
    // pages
    OfficesPageComponent,
  ],
  imports: [
    CommonModule,
    OfficesRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class OfficesModule { }
