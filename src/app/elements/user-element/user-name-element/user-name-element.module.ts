import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNameElementComponent } from './user-name-element.component';



@NgModule({
  declarations: [
    UserNameElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserNameElementComponent
  ]
})
export class UserNameElementModule { }
