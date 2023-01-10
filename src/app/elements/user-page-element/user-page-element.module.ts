import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageElementComponent } from './user-page-element.component';
import { UserPageDelegationElementModule } from './user-page-delegation-element/user-page-delegation-element.module';
import { UserPageInfoElementModule } from './user-page-info-element/user-page-info-element.module';
import { UserPageVotingRecordElementModule } from './user-page-voting-record-element/user-page-voting-record-element.module';
import { UserPageGroupsElementModule } from './user-page-groups-element/user-page-groups-element.module';



@NgModule({
  declarations: [
    UserPageElementComponent
  ],
  imports: [
    CommonModule,
    UserPageInfoElementModule,
    UserPageDelegationElementModule,
    UserPageVotingRecordElementModule,
    UserPageGroupsElementModule
  ],
  exports: [
    UserPageElementComponent
  ]
})
export class UserPageElementModule { }
