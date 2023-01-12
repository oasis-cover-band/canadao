import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageComponent } from './group-page.component';
import { GroupPageElementModule } from 'src/app/elements/group-page-element/group-page-element.module';



@NgModule({
  declarations: [
    GroupPageComponent
  ],
  imports: [
    CommonModule,
    GroupPageElementModule
  ],
  exports: [
    GroupPageComponent
  ]
})
export class GroupPageModule { }
