import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsPageComponent } from './questions-page.component';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';
import { QuestionElementModule } from 'src/app/elements/question-element/question-element.module';



@NgModule({
  declarations: [
    QuestionsPageComponent
  ],
  imports: [
    CommonModule,
    QuestionElementModule,
    SectionElementModule
  ],
  exports: [
    QuestionsPageComponent
  ]
})
export class QuestionsPageModule { }
