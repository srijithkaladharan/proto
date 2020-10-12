import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  barChartType: ChartType = "bar";

  barChartLegend = true;

  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [85, 60, 45, 75, 95, 60, 80], label: 'Stock Prices' },
  ];


}
