import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageDelegationChartElementComponent } from './user-page-delegation-chart-element.component';
import { EChartElementModule } from 'src/app/elements/e-chart-element/e-chart-element.module';



@NgModule({
  declarations: [
    UserPageDelegationChartElementComponent
  ],
  imports: [
    CommonModule,
    EChartElementModule
  ],
  exports: [
    UserPageDelegationChartElementComponent
  ]
})
export class UserPageDelegationChartElementModule { }
