import { Component, Input } from '@angular/core'

export interface ChartColor {
  name: string,
  selectable: boolean,
  domain: string[],
}

@Component({
  selector: 'app-charts-gauge',
  template: `
    <div class="chart-container">
      <ngx-charts-gauge
        [scheme]="colorScheme"
        [results]="data"
        [max]="max"
        (select)="onSelect($event)"
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      >
      </ngx-charts-gauge>
    </div>
  `,
  styles: [
    '.chart-container { height: 300px; }',
  ],
})
export class ChartsGaugeComponent {
  @Input() data: any
  @Input() max!: number

  colorScheme: ChartColor

  constructor() {
    this.colorScheme = {
      name: 'vivid',
      selectable: true,
      domain: [
        '#2196f3',
        '#00b862',
        '#3f51b5',
        '#ff5722',
        '#afdf0a',
        '#647c8a',
        '#f3e562',
        '#ff9800',
        '#a7b61a',
        '#ff4514',
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
