import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageVotingRecordElementComponent } from './user-page-voting-record-element.component';
import { VoteElementModule } from '../../vote-element/vote-element.module';
import { SectionElementModule } from '../../section-element/section-element.module';



@NgModule({
  declarations: [
    UserPageVotingRecordElementComponent
  ],
  imports: [
    CommonModule,
    VoteElementModule,
    SectionElementModule
  ],
  exports: [
    UserPageVotingRecordElementComponent
  ]
})
export class UserPageVotingRecordElementModule { }
