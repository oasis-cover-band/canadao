import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsPageComponent } from './topics-page.component';
import { TopicElementModule } from 'src/app/elements/topic-element/topic-element.module';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';



@NgModule({
  declarations: [
    TopicsPageComponent
  ],
  imports: [
    CommonModule,
    TopicElementModule,
    SectionElementModule
  ],
  exports: [
    TopicsPageComponent
  ]
})
export class TopicsPageModule { }
