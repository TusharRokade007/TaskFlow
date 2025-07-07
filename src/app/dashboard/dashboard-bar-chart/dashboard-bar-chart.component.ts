import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
@Component({
  selector: 'app-dashboard-bar-chart',
  imports: [],
  templateUrl: './dashboard-bar-chart.component.html',
  styleUrl: './dashboard-bar-chart.component.css'
})
export class DashboardBarChartComponent {
  @ViewChild('barCanvas') barCanvas!: ElementRef;
  @Input() labels: string[] = [];
  @Input() datasets: any = [];
  ngAfterViewInit(): void {
    const ctx = this.barCanvas.nativeElement.getContext('2d');

    const data: ChartData<'bar'> = {
      labels: this.labels,
      datasets: this.datasets
    };

    const options: ChartOptions<'bar'> = {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            color: '#6b7280',
          },
          grid: {
            display: false

          },
        },
        x: {
          ticks: {
            color: '#374151',
          },
          grid: {
            display: false
          },
        },
      },
    };


    new Chart(ctx, {
      type: 'bar',
      data,
      options,
    });
  }
}
