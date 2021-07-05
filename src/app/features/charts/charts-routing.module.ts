import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ChartsPageComponent } from './pages/charts-page'

const routes: Routes = [
  { path: '', component: ChartsPageComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class ChartsRoutingModule {}
