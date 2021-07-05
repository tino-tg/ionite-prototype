import { Component } from '@angular/core'

import { ComponentExample } from '@shared/code'
import htm from '!!raw-loader!./charts-bar-vertical.component.html'
import js from '!!raw-loader!./charts-bar-vertical.component.example.js'
import scss from '!!raw-loader!./charts-bar-vertical.component.scss'

export interface ChartColor {
  name: string,
  selectable: boolean,
  domain: string[],
}

@Component({
  selector: 'app-charts-bar-vertical',
  templateUrl: 'charts-bar-vertical.component.html',
  styleUrls: [
    './charts-bar-vertical.component.scss',
  ],
  providers: [
    { provide: ComponentExample, useExisting: ChartsBarVerticalComponent },
  ],
})
export class ChartsBarVerticalComponent implements ComponentExample {
  templateText = htm
  controllerText = js
  styleText = scss

  data: any
  colorScheme: ChartColor
  customColors: any
  showLegend: boolean = true
  showYAxis: boolean = true
  showYAxisLabel: boolean = true
  legendTitle: string = 'Legende'
  yAxisLabel: string = 'Y-Achse'

  constructor() {
    this.data = [
      {
        name: 'Lager 1',
        value: 40632,
        extra: {
          code: 'de',
        },
      },
      {
        name: 'Empfang',
        value: 50000,
        extra: {
          code: 'us',
        },
      },
      {
        name: 'Parkplatz',
        value: 36745,
        extra: {
          code: 'fr',
        },
      },
      {
        name: 'Material',
        value: 36240,
        extra: {
          code: 'uk',
        },
      },
      {
        name: 'Lager 3',
        value: 33000,
        extra: {
          code: 'es',
        },
      },
      {
        name: 'Verwaltung',
        value: 35800,
        extra: {
          code: 'it',
        },
      },
    ]

    this.colorScheme = {
      name: 'vivid',
      selectable: true,
      domain: [
        '#647c8a',
        '#3f51b5',
        '#2196f3',
        '#00b862',
        '#afdf0a',
        '#a7b61a',
        '#f3e562',
        '#ff9800',
        '#ff5722',
        '#ff4514',
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
