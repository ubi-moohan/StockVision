import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

import { default as Annotation } from "chartjs-plugin-annotation";

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent implements OnInit {

  constructor() {
    Chart.register(Annotation)
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    },
      {
        data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [ 100, 80, 70, 90, 100, 70, 40 ],
        label: 'Series C',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
      ],
    labels: [ '08/01', '08/15', '08/30', '09/01', '09/15', '09/30', '10/01' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line:{
        tension: 0.5
      }
    },
    scales: {
      x: {},
      'y-axis-0':
        {
          position: "left"
        }
    },

    plugins: {
      legend: { display: true },
      // annotation: {
      //   annotations: [
      //     {
      //       // type: "line",
      //       // scaleID: 'x',
      //       // value: '09/01',
      //       // borderColor: 'orange',
      //       // borderWidth: 2,
      //       // label: {
      //       //   display: false,
      //       //   position: 'center',
      //       //   color: 'orange',
      //       //   content: 'LineAnno',
      //       //   font: {
      //       //     weight: 'bold'
      //       //   }
      //       // }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }):void {
  console.log(event, active);
  }

  public chartHovered({ event, active}: {event?: ChartEvent, active?: {}[] }):void {
    console.log(event, active);
  }

  ngOnInit(): void {
  }

}
