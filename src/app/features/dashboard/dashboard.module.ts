import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BarChartModule, GaugeModule, LineChartModule } from '@swimlane/ngx-charts'

import { SharedModule } from '@shared/shared.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { ChartsBarVerticalComponent } from './components/charts/bar-vertical/charts-bar-vertical.component'
import { ChartsGaugeComponent } from './components/charts/gauge/charts-gauge.component'
import { ChartsLineChartComponent } from './components/charts/line-chart/charts-line-chart.component'

@NgModule({
  declarations: [
    // pages
    DashboardPageComponent,

    // components
    ChartsBarVerticalComponent,
    ChartsGaugeComponent,
    ChartsLineChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // shared resources
    SharedModule,

    // chart modules
    BarChartModule,
    GaugeModule,
    LineChartModule,
  ],
})
export class DashboardModule { }
