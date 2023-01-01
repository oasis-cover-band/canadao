import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsPageComponent } from './groups-page.component';
import { GroupElementModule } from 'src/app/elements/group-element/group-element.module';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';



@NgModule({
  declarations: [
    GroupsPageComponent
  ],
  imports: [
    CommonModule,
    GroupElementModule,
    SectionElementModule
  ],
  exports: [
    GroupsPageComponent
  ]
})
export class GroupsPageModule { }
