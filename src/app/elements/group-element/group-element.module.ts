import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupElementComponent } from './group-element.component';
import { GroupImageElementModule } from './group-image-element/group-image-element.module';
import { GroupHeaderElementModule } from './group-header-element/group-header-element.module';
import { GroupDescriptionElementModule } from './group-description-element/group-description-element.module';
import { GroupActionsElementModule } from './group-actions-element/group-actions-element.module';
import { GroupStatisticsElementModule } from './group-statistics-element/group-statistics-element.module';



@NgModule({
  declarations: [
    GroupElementComponent
  ],
  imports: [
    CommonModule,
    GroupImageElementModule,
    GroupHeaderElementModule,
    GroupDescriptionElementModule,
    GroupActionsElementModule,
    GroupStatisticsElementModule
  ],
  exports: [
    GroupElementComponent
  ]
})
export class GroupElementModule { }
