import { Component, Input } from '@angular/core'

export interface ChartColor {
  name: string,
  selectable: boolean,
  domain: string[],
}

@Component({
  selector: 'app-charts-line-chart',
  template: `
    <div class="chart-container">
      <ngx-charts-line-chart
        [scheme]="colorScheme"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        [timeline]="timeline"
        [results]="data"
        [yScaleMax]="maxY"
        (select)="onSelect($event)"
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      >
      </ngx-charts-line-chart>
    </div>
  `,
  styles: [
    '.chart-container { height: 300px; }',
  ],
})
export class ChartsLineChartComponent {
  @Input() data: any
  @Input() maxY!: number

  // options
  xAxis: boolean = true
  yAxis: boolean = true
  timeline: boolean = true
  colorScheme: ChartColor

  constructor() {
    this.colorScheme = {
      name: 'vivid',
      selectable: true,
      domain: [
        '#ff9800',
        '#afdf0a',
        '#3f51b5',
        '#f3e562',
        '#2196f3',
        '#00b862',
        '#ff5722',
        '#647c8a',
        '#ff4514',
        '#a7b61a',
      ],
    }
  }

  onSelect(data: any) {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)))
  }

  onActivate(data: any) {
    console.log('Activate', JSON.parse(JSON.stringify(data)))
  }

  onDeactivate(data: any) {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)))
  }
}
