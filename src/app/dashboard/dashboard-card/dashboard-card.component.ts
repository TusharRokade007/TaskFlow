import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [NgStyle],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
   @Input() cardNumber:number=0;
   @Input() cardNumberBgColor:string='';
   @Input() cardTitle:string="";
}
