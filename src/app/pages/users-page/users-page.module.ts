import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';
import { UserElementModule } from 'src/app/elements/user-element/user-element.module';



@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    SectionElementModule,
    UserElementModule
  ],
  exports: [
    UsersPageComponent
  ]
})
export class UsersPageModule { }
