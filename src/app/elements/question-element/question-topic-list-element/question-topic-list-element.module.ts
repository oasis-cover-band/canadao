import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTopicListElementComponent } from './question-topic-list-element.component';
import { QuestionTopicItemElementModule } from './question-topic-item-element/question-topic-item-element.module';



@NgModule({
  declarations: [
    QuestionTopicListElementComponent
  ],
  imports: [
    CommonModule,
    QuestionTopicItemElementModule
  ],
  exports: [
    QuestionTopicListElementComponent
  ]
})
export class QuestionTopicListElementModule { }
