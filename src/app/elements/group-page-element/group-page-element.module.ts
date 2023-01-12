import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageElementComponent } from './group-page-element.component';
import { GroupPageInfoElementModule } from './group-page-info-element/group-page-info-element.module';
import { GroupPageUsersElementModule } from './group-page-users-element/group-page-users-element.module';
import { GroupPageQuestionsElementModule } from './group-page-questions-element/group-page-questions-element.module';



@NgModule({
  declarations: [
    GroupPageElementComponent
  ],
  imports: [
    CommonModule,
    GroupPageInfoElementModule,
    GroupPageUsersElementModule,
    GroupPageQuestionsElementModule
  ],
  exports: [
    GroupPageElementComponent
  ]
})
export class GroupPageElementModule { }
