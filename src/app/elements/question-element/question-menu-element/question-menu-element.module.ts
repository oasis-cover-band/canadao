import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMenuElementComponent } from './question-menu-element.component';
import { QuestionMenuItemElementModule } from './question-menu-item-element/question-menu-item-element.module';
import { SectionElementModule } from '../../section-element/section-element.module';



@NgModule({
  declarations: [
    QuestionMenuElementComponent
  ],
  imports: [
    CommonModule,
    QuestionMenuItemElementModule,
    SectionElementModule
  ],
  exports: [
    QuestionMenuElementComponent
  ]
})
export class QuestionMenuElementModule { }
