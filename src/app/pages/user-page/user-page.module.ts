import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageElementModule } from 'src/app/elements/user-page-element/user-page-element.module';



@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserPageElementModule
  ],
  exports: [
    UserPageComponent
  ]
})
export class UserPageModule { }
