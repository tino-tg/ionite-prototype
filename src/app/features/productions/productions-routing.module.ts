import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ProductionsPageComponent } from './pages/productions-page'

const routes: Routes = [
  { path: '', component: ProductionsPageComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductionsRoutingModule { }
