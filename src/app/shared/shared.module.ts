import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';


@NgModule({
  declarations: [BarChartComponent, BubbleChartComponent, LineChartComponent, PieChartComponent, RadarChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
