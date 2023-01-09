import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageInfoElementComponent } from './user-page-info-element.component';
import { UserDescriptionElementModule } from '../../user-element/user-description-element/user-description-element.module';
import { UserImageElementModule } from '../../user-element/user-image-element/user-image-element.module';
import { UserNameElementModule } from '../../user-element/user-name-element/user-name-element.module';
import { UserStatisticsElementModule } from '../../user-element/user-statistics-element/user-statistics-element.module';
import { SectionElementModule } from '../../section-element/section-element.module';



@NgModule({
  declarations: [
    UserPageInfoElementComponent
  ],
  imports: [
    CommonModule,
    UserDescriptionElementModule,
    UserImageElementModule,
    UserNameElementModule,
    UserStatisticsElementModule,
    SectionElementModule
  ],
  exports: [
    UserPageInfoElementComponent
  ]
})
export class UserPageInfoElementModule { }
