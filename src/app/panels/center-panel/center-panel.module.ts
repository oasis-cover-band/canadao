import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterPanelComponent } from './center-panel.component';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';



@NgModule({
  declarations: [
    CenterPanelComponent
  ],
  imports: [
    CommonModule,
    HomePageModule
  ],
  exports: [
    CenterPanelComponent
  ]
})
export class CenterPanelModule { }
