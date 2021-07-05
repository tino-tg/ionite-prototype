import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BarChartModule } from '@swimlane/ngx-charts'

import { SharedModule } from '@shared/shared.module'
import { ChartsRoutingModule } from './charts-routing.module'
import { ChartsPageComponent } from './pages/charts-page'
import { ChartsBarVerticalComponent } from './components/charts-bar-vertical'

@NgModule({
  declarations: [
    // pages
    ChartsPageComponent,

    // components
    ChartsBarVerticalComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,

    // shared resources
    SharedModule,

    // chart modules
    BarChartModule,
  ],
})
export class ChartsModule {}
