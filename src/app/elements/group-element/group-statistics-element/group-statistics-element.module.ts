import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupStatisticsElementComponent } from './group-statistics-element.component';
import { SectionElementModule } from '../../section-element/section-element.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    GroupStatisticsElementComponent
  ],
  imports: [
    CommonModule,
    SectionElementModule,
    PipesModule
  ],
  exports: [
    GroupStatisticsElementComponent
  ]
})
export class GroupStatisticsElementModule { }
