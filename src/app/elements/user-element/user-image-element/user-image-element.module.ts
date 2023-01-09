import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImageElementComponent } from './user-image-element.component';
import { MultiMediaElementModule } from '../../multi-media-element/multi-media-element.module';



@NgModule({
  declarations: [
    UserImageElementComponent
  ],
  imports: [
    CommonModule,
    MultiMediaElementModule
  ],
  exports: [
    UserImageElementComponent
  ]
})
export class UserImageElementModule { }
