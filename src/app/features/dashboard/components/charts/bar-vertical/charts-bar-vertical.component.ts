import { Component, Input } from '@angular/core'

export interface ChartColor {
  name: string,
  selectable: boolean,
  domain: string[],
}

@Component({
  selector: 'app-charts-bar-vertical',
  template: `
    <div class="chart-container">
      <ngx-charts-bar-vertical
        [results]="data"
        [yScaleMax]="maxY"
        [scheme]="colorScheme"
        [customColors]="customColors"
        [yAxis]="showYAxis"
        [xAxis]="showXAxis"
        (select)="select($event)"
        (activate)="activate($event)"
        (deactivate)="deactivate($event)"
      >
      </ngx-charts-bar-vertical>
    </div>
  `,
  styles: [
    '.chart-container { height: 400px; }',
  ],
})
export class ChartsBarVerticalComponent {
  @Input() data: any
  @Input() maxY!: number

  // options
  colorScheme: ChartColor
  customColors: any
  showYAxis: boolean = true
  showXAxis: boolean = true

  constructor() {
    this.colorScheme = {
      name: 'vivid',
      selectable: true,
      domain: [
        '#f3e562',
      ],
    }
  }

  select(data: any) {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)))
  }

  activate(data: any) {
    console.log('Activate', JSON.parse(JSON.stringify(data)))
  }

  deactivate(data: any) {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)))
  }
}
