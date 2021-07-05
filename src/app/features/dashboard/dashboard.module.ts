import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BarChartModule } from '@swimlane/ngx-charts'

import { SharedModule } from '@shared/shared.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { ChartsBarVerticalComponent } from './components/charts/charts-bar-vertical.component'


@NgModule({
  declarations: [
    // pages
    DashboardPageComponent,

    // components
    ChartsBarVerticalComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // shared resources
    SharedModule,

    // chart modules
    BarChartModule,
  ],
})
export class DashboardModule { }
