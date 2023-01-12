import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageUsersElementComponent } from './group-page-users-element.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserElementModule } from '../../user-element/user-element.module';
import { PaginatorElementModule } from '../../shared-element/paginator-element/paginator-element.module';



@NgModule({
  declarations: [
    GroupPageUsersElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    UserElementModule,
    PaginatorElementModule
  ],
  exports: [
    GroupPageUsersElementComponent
  ]
})
export class GroupPageUsersElementModule { }
