import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPanelComponent } from './nav-panel.component';
import { SvgElementModule } from 'src/app/elements/svg-element/svg-element.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavPanelComponent
  ],
  imports: [
    CommonModule,
    SvgElementModule,
    RouterModule
  ],
  exports: [
    NavPanelComponent
  ]
})
export class NavPanelModule { }
