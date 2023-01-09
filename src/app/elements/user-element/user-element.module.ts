import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserElementComponent } from './user-element.component';
import { UserImageElementModule } from './user-image-element/user-image-element.module';
import { UserNameElementModule } from './user-name-element/user-name-element.module';
import { UserDescriptionElementModule } from './user-description-element/user-description-element.module';
import { SectionElementModule } from '../section-element/section-element.module';
import { UserStatisticsElementModule } from './user-statistics-element/user-statistics-element.module';



@NgModule({
  declarations: [
    UserElementComponent
  ],
  imports: [
    CommonModule,
    UserImageElementModule,
    UserNameElementModule,
    UserDescriptionElementModule,
    UserStatisticsElementModule,
    SectionElementModule
  ],
  exports: [
    UserElementComponent
  ]
})
export class UserElementModule { }
