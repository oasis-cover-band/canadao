import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupStatisticsElementComponent } from './group-statistics-element.component';
import { SectionElementModule } from '../../section-element/section-element.module';



@NgModule({
  declarations: [
    GroupStatisticsElementComponent
  ],
  imports: [
    CommonModule,
    SectionElementModule
  ],
  exports: [
    GroupStatisticsElementComponent
  ]
})
export class GroupStatisticsElementModule { }
