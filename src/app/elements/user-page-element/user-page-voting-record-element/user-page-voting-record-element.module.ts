import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageVotingRecordElementComponent } from './user-page-voting-record-element.component';
import { VoteElementModule } from '../../vote-element/vote-element.module';
import { SectionElementModule } from '../../section-element/section-element.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { VotingResultPipe } from 'src/app/pipes/voting-result.pipe';
import { PaginatorElementModule } from '../../shared-element/paginator-element/paginator-element.module';



@NgModule({
  declarations: [
    UserPageVotingRecordElementComponent
  ],
  imports: [
    CommonModule,
    VoteElementModule,
    SectionElementModule,
    PipesModule,
    PaginatorElementModule
  ],
  providers: [
    VotingResultPipe
  ],
  exports: [
    UserPageVotingRecordElementComponent
  ]
})
export class UserPageVotingRecordElementModule { }
