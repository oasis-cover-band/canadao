import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidePanelComponent } from './left-side-panel.component';



@NgModule({
  declarations: [
    LeftSidePanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeftSidePanelComponent
  ]
})
export class LeftSidePanelModule { }
