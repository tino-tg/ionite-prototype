import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  humidity = [
    {
      "name": "Inside",
      "value": 40.5,
    },
  ]

  temperature = [
    {
      "name": "Inside",
      "value": 29.5,
    },
  ]

  co2 = [
    {
      "name": "Inside",
      "value": 582.8,
    },
  ]

  pm2 = [
    {
      "name": "Inside",
      "value": 12.8,
    },
  ]

  noise = [
    {
      "name": "Inside",
      "series": [
        {
          "name": "06:00",
          "value": 62,
        },
        {
          "name": "06:30",
          "value": 73,
        },
        {
          "name": "07:00",
          "value": 89,
        },
        {
          "name": "07:30",
          "value": 12,
        },
        {
          "name": "08:00",
          "value": 18,
        },
        {
          "name": "08:30",
          "value": 62,
        },
        {
          "name": "09:00",
          "value": 48,
        },
        {
          "name": "09:30",
          "value": 73,
        },
        {
          "name": "10:00",
          "value": 91,
        },
        {
          "name": "10:30",
          "value": 75,
        },
        {
          "name": "11:00",
          "value": 67,
        },
        {
          "name": "11:30",
          "value": 32,
        },
        {
          "name": "12:00",
          "value": 11,
        },
        {
          "name": "12:30",
          "value": 12,
        },
        {
          "name": "13:00",
          "value": 41,
        },
        {
          "name": "13:30",
          "value": 35,
        },
      ],
    },
  ]

  avgTemp = [
    {
      "name": "06:00",
      "value": 12,
    },
    {
      "name": "06:30",
      "value": 13,
    },
    {
      "name": "07:00",
      "value": 16,
    },
    {
      "name": "07:30",
      "value": 17,
    },
    {
      "name": "08:00",
      "value": 18,
    },
    {
      "name": "08:30",
      "value": 20,
    },
    {
      "name": "09:00",
      "value": 20,
    },
    {
      "name": "09:30",
      "value": 20,
    },
    {
      "name": "10:00",
      "value": 21,
    },
    {
      "name": "10:30",
      "value": 25,
    },
    {
      "name": "11:00",
      "value": 27,
    },
    {
      "name": "11:30",
      "value": 32,
    },
    {
      "name": "12:00",
      "value": 30,
    },
    {
      "name": "12:30",
      "value": 31,
    },
    {
      "name": "13:00",
      "value": 30,
    },
    {
      "name": "13:30",
      "value": 35,
    },
  ]
}
