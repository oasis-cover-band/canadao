import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiMediaElementComponent } from './multi-media-element.component';
import { ImageElementModule } from './image-element/image-element.module';
import { VideoElementModule } from './video-element/video-element.module';



@NgModule({
  declarations: [
    MultiMediaElementComponent
  ],
  imports: [
    CommonModule,
    ImageElementModule,
    VideoElementModule
  ],
  exports: [
    MultiMediaElementComponent
  ]
})
export class MultiMediaElementModule { }
