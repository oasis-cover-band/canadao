import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageDelegationElementComponent } from './user-page-delegation-element.component';
import { UserPageDelegationStatisticsElementModule } from './user-page-delegation-statistics-element/user-page-delegation-statistics-element.module';
import { UserPageDelegationChartElementModule } from './user-page-delegation-chart-element/user-page-delegation-chart-element.module';



@NgModule({
  declarations: [
    UserPageDelegationElementComponent
  ],
  imports: [
    CommonModule,
    UserPageDelegationStatisticsElementModule,
    UserPageDelegationChartElementModule
  ],
  exports: [
    UserPageDelegationElementComponent
  ]
})
export class UserPageDelegationElementModule { }
