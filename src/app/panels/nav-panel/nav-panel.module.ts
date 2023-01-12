import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPanelComponent } from './nav-panel.component';
import { SvgElementModule } from 'src/app/elements/svg-element/svg-element.module';
import { RouterModule } from '@angular/router';
import { SearchElementModule } from 'src/app/elements/search-element/search-element.module';



@NgModule({
  declarations: [
    NavPanelComponent
  ],
  imports: [
    CommonModule,
    SvgElementModule,
    RouterModule,
    SearchElementModule
  ],
  exports: [
    NavPanelComponent
  ]
})
export class NavPanelModule { }
