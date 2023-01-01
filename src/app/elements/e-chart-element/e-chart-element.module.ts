import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartElementComponent } from './e-chart-element.component';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    EChartElementComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  exports: [
    EChartElementComponent
  ]
})
export class EChartElementModule { }
