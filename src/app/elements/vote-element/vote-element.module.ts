import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteElementComponent } from './vote-element.component';
import { VoteHeaderElementModule } from './vote-header-element/vote-header-element.module';
import { VoteResultElementModule } from './vote-result-element/vote-result-element.module';



@NgModule({
  declarations: [
    VoteElementComponent
  ],
  imports: [
    CommonModule,
    VoteHeaderElementModule,
    VoteResultElementModule
  ],
  exports: [
    VoteElementComponent
  ]
})
export class VoteElementModule { }
