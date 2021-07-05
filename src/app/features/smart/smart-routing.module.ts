import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SmartPageComponent } from './pages/smart-page.component'

const routes: Routes = [
  { path: '', component: SmartPageComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SmartRoutingModule { }
