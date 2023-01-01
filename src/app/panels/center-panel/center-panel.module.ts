import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterPanelComponent } from './center-panel.component';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';
import { CenterPanelRoutingModule } from './center-panel-routing.module';
import { SectionElementModule } from 'src/app/elements/section-element/section-element.module';



@NgModule({
  declarations: [
    CenterPanelComponent
  ],
  imports: [
    CenterPanelRoutingModule,
    CommonModule,
    HomePageModule,
    SectionElementModule
  ],
  exports: [
    CenterPanelComponent
  ]
})
export class CenterPanelModule { }
