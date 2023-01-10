import { NgModule } from '@angular/core';
import { KNumberPipe } from './k-number.pipe';
import { VotingResultPipe } from './voting-result.pipe';



@NgModule({
  declarations: [
    KNumberPipe,
    VotingResultPipe
  ],
  exports: [
    KNumberPipe,
    VotingResultPipe
  ]
})
export class PipesModule { }
