import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutPageComponent } from './pages/about-page'

const routes: Routes = [
  { path: '', component: AboutPageComponent },
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
export class AboutRoutingModule {}
