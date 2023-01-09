import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageDelegationStatisticsElementComponent } from './user-page-delegation-statistics-element.component';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    UserPageDelegationStatisticsElementComponent
  ],
  imports: [
    CommonModule,
    SectionElementModule,
    PipesModule
  ],
  exports: [
    UserPageDelegationStatisticsElementComponent
  ]
})
export class UserPageDelegationStatisticsElementModule { }
