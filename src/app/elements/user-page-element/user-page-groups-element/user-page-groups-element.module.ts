import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageGroupsElementComponent } from './user-page-groups-element.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SectionElementModule } from '../../section-element/section-element.module';
import { GroupElementModule } from '../../group-element/group-element.module';



@NgModule({
  declarations: [
    UserPageGroupsElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SectionElementModule,
    GroupElementModule
  ],
  exports: [
    UserPageGroupsElementComponent
  ]
})
export class UserPageGroupsElementModule { }