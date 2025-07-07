import { Component } from '@angular/core';
import { DashboardCardComponent } from "../dashboard-card/dashboard-card.component";
import { AppColor } from '../../shared/constants/colors';
import { DashbaordDoughnutChartComponent } from "../dashbaord-doughnut-chart/dashbaord-doughnut-chart.component";
import { DashboardBarChartComponent } from "../dashboard-bar-chart/dashboard-bar-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCardComponent, DashboardBarChartComponent, DashbaordDoughnutChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  AppColor = AppColor;
  barChartLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat'];
  barChartDatasets = [
    {
      label: 'Tasks',
      data: [2, 3, 3, 4, 4.5, 10],
      backgroundColor: '#4C6FFF',
      borderRadius: 6,
      barThickness: 30,
    },
  ]


  doughnutChartLabels = ['Done', 'In Progress', 'Pending']
  doughnutChartDatasets = [
    {
      data: [56, 26, 18],
      backgroundColor: ['#4C6FFF', '#FBBF24', '#A78BFA'],
      borderWidth: 0
    },
  ]
}
