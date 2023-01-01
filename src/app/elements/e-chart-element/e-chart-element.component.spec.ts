import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EChartElementComponent } from './e-chart-element.component';

describe('EChartElementComponent', () => {
  let component: EChartElementComponent;
  let fixture: ComponentFixture<EChartElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EChartElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EChartElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
