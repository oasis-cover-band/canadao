import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoElementComponent } from './logo-element.component';
import { SectionElementModule } from '../section-element/section-element.module';



@NgModule({
  declarations: [
    LogoElementComponent
  ],
  imports: [
    CommonModule,
    SectionElementModule
  ],
  exports: [
    LogoElementComponent
  ]
})
export class LogoElementModule { }
