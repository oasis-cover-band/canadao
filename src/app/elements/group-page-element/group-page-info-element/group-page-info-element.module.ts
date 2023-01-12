import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageInfoElementComponent } from './group-page-info-element.component';
import { SectionElementModule } from '../../section-element/section-element.module';
import { GroupDescriptionElementModule } from '../../group-element/group-description-element/group-description-element.module';
import { GroupHeaderElementModule } from '../../group-element/group-header-element/group-header-element.module';
import { GroupImageElementModule } from '../../group-element/group-image-element/group-image-element.module';
import { GroupStatisticsElementModule } from '../../group-element/group-statistics-element/group-statistics-element.module';



@NgModule({
  declarations: [
    GroupPageInfoElementComponent
  ],
  imports: [
    CommonModule,
    SectionElementModule,
    GroupDescriptionElementModule,
    GroupHeaderElementModule,
    GroupImageElementModule,
    GroupStatisticsElementModule
  ],
  exports: [
    GroupPageInfoElementComponent
  ]
})
export class GroupPageInfoElementModule { }
