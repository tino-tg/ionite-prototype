import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'smart', loadChildren: () => import('@features/smart/smart.module').then(m => m.SmartModule) },
  { path: 'offices', loadChildren: () => import('@features/offices/offices.module').then(m => m.OfficesModule) },
  { path: 'buildings', loadChildren: () => import('@features/buildings/buildings.module').then(m => m.BuildingsModule) },
  { path: 'productions', loadChildren: () => import('@features/productions/productions.module').then(m => m.ProductionsModule) },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'charts', loadChildren: () => import('./features/charts/charts.module').then(m => m.ChartsModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
