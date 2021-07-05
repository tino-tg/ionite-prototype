import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { ProductionsRoutingModule } from './productions-routing.module'
import { ProductionsPageComponent } from './pages/productions-page'

@NgModule({
  declarations: [
    // pages
    ProductionsPageComponent,

    // components
  ],
  imports: [
    CommonModule,
    ProductionsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class ProductionsModule { }
