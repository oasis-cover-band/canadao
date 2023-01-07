import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicImageElementComponent } from './topic-image-element.component';
import { MultiMediaElementModule } from '../../multi-media-element/multi-media-element.module';



@NgModule({
  declarations: [
    TopicImageElementComponent
  ],
  imports: [
    CommonModule,
    MultiMediaElementModule
  ],
  exports: [
    TopicImageElementComponent
  ]
})
export class TopicImageElementModule { }
