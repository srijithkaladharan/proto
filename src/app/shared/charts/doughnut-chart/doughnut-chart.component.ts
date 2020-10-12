import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Volks Wagen'];

  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];

  doughnutChartType: ChartType = 'doughnut';

}
