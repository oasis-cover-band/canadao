import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupImageElementComponent } from './group-image-element.component';
import { MultiMediaElementModule } from '../../multi-media-element/multi-media-element.module';



@NgModule({
  declarations: [
    GroupImageElementComponent
  ],
  imports: [
    CommonModule,
    MultiMediaElementModule
  ],
  exports: [
    GroupImageElementComponent
  ]
})
export class GroupImageElementModule { }
