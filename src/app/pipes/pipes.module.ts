import { NgModule } from '@angular/core';
import { KNumberPipe } from './k-number.pipe';



@NgModule({
  declarations: [
    KNumberPipe
  ],
  exports: [
    KNumberPipe
  ]
})
export class PipesModule { }
