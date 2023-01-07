import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicElementComponent } from './topic-element.component';
import { TopicImageElementModule } from './topic-image-element/topic-image-element.module';
import { TopicHeaderElementModule } from './topic-header-element/topic-header-element.module';
import { SectionElementModule } from '../section-element/section-element.module';



@NgModule({
  declarations: [
    TopicElementComponent
  ],
  imports: [
    CommonModule,
    TopicImageElementModule,
    TopicHeaderElementModule,
    SectionElementModule
  ],
  exports: [
    TopicElementComponent
  ]
})
export class TopicElementModule { }
