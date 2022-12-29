import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { QuestionElementModule } from 'src/app/elements/question-element/question-element.module';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    QuestionElementModule,
    SectionElementModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
