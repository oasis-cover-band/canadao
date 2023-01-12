import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageElementComponent } from './group-page-element.component';
import { GroupPageInfoElementModule } from './group-page-info-element/group-page-info-element.module';



@NgModule({
  declarations: [
    GroupPageElementComponent
  ],
  imports: [
    CommonModule,
    GroupPageInfoElementModule
  ],
  exports: [
    GroupPageElementComponent
  ]
})
export class GroupPageElementModule { }
