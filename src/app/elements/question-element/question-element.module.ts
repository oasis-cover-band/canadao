import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionElementComponent } from './question-element.component';
import { QuestionHeaderElementModule } from './question-header-element/question-header-element.module';
import { QuestionChoicesElementModule } from './question-choices-element/question-choices-element.module';
import { QuestionTopicListElementModule } from './question-topic-list-element/question-topic-list-element.module';
import { QuestionMenuElementModule } from './question-menu-element/question-menu-element.module';



@NgModule({
  declarations: [
    QuestionElementComponent
  ],
  imports: [
    CommonModule,
    QuestionHeaderElementModule,
    QuestionChoicesElementModule,
    QuestionTopicListElementModule,
    QuestionMenuElementModule
  ],
  exports: [
    QuestionElementComponent
  ]
})
export class QuestionElementModule { }
