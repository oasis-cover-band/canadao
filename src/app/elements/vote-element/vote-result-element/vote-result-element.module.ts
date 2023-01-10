import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteResultElementComponent } from './vote-result-element.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    VoteResultElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    VoteResultElementComponent
  ]
})
export class VoteResultElementModule { }
