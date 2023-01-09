import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageElementComponent } from './user-page-element.component';
import { UserPageDelegationElementModule } from './user-page-delegation-element/user-page-delegation-element.module';
import { UserPageInfoElementModule } from './user-page-info-element/user-page-info-element.module';



@NgModule({
  declarations: [
    UserPageElementComponent
  ],
  imports: [
    CommonModule,
    UserPageInfoElementModule,
    UserPageDelegationElementModule
  ],
  exports: [
    UserPageElementComponent
  ]
})
export class UserPageElementModule { }
