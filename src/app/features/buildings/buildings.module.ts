import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { BuildingsRoutingModule } from './buildings-routing.module'
import { BuildingsPageComponent } from './pages/buildings-page.component'


@NgModule({
  declarations: [
    BuildingsPageComponent,
  ],
  imports: [
    CommonModule,
    BuildingsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class BuildingsModule { }
