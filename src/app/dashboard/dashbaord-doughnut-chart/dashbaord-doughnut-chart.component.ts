import { AfterViewInit, Component, ElementRef, input, Input, ViewChild } from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
@Component({
  selector: 'app-dashbaord-doughnut-chart',
  imports: [],
  templateUrl: './dashbaord-doughnut-chart.component.html',
  styleUrl: './dashbaord-doughnut-chart.component.css'
})
export class DashbaordDoughnutChartComponent implements AfterViewInit {
   @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef;
   @Input() labels:string[]=[]
   @Input() datasets:any[]=[];
  ngAfterViewInit(): void {
    const ctx = this.doughnutCanvas.nativeElement.getContext('2d');

    const centerTextPlugin: Plugin<'doughnut'> = {
      id: 'centerText',
      afterDraw: (chart) => {
        const { ctx, chartArea } = chart;
        const width = chart.width;
        const height = chart.height;
        ctx.save();
        const text = '56%';
        ctx.font = 'bold 20px sans-serif';
        ctx.fillStyle = '#1f2937';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, width / 2, height / 2);
        ctx.restore();
      },
    };

    const data: ChartData<'doughnut'> = {
      labels:this.labels,
      datasets:this.datasets,
    };

    const options: ChartOptions<'doughnut'> = {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      animation: {
        animateRotate: true,
        duration: 1000,
        easing: 'easeOutCubic',
      },
    };

    new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
      plugins: [centerTextPlugin],
    });
  }
}
