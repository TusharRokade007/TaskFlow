import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordDoughnutChartComponent } from './dashbaord-doughnut-chart.component';

describe('DashbaordDoughnutChartComponent', () => {
  let component: DashbaordDoughnutChartComponent;
  let fixture: ComponentFixture<DashbaordDoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbaordDoughnutChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbaordDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
