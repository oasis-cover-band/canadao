import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMenuItemElementComponent } from './question-menu-item-element.component';
import { SvgElementModule } from 'src/app/elements/svg-element/svg-element.module';



@NgModule({
  declarations: [
    QuestionMenuItemElementComponent
  ],
  imports: [
    CommonModule,
    SvgElementModule
  ],
  exports: [
    QuestionMenuItemElementComponent
  ]
})
export class QuestionMenuItemElementModule { }
