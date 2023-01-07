import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ImageElementComponent } from './image-element.component';



@NgModule({
  declarations: [
    ImageElementComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    ImageElementComponent
  ]
})
export class ImageElementModule { }
