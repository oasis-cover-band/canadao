import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupActionsElementComponent } from './group-actions-element.component';
import { ButtonElementModule } from '../../button-element/button-element.module';



@NgModule({
  declarations: [
    GroupActionsElementComponent
  ],
  imports: [
    CommonModule,
    ButtonElementModule
  ],
  exports: [
    GroupActionsElementComponent
  ]
})
export class GroupActionsElementModule { }
