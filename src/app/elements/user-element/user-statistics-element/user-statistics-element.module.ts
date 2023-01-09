import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatisticsElementComponent } from './user-statistics-element.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SectionElementModule } from '../../section-element/section-element.module';



@NgModule({
  declarations: [
    UserStatisticsElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SectionElementModule
  ],
  exports: [
    UserStatisticsElementComponent
  ]
})
export class UserStatisticsElementModule { }
