import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsidePanelComponent } from './aside-panel.component';
import { ButtonElementModule } from 'src/app/elements/button-element/button-element.module';



@NgModule({
  declarations: [
    AsidePanelComponent
  ],
  imports: [
    CommonModule,
    ButtonElementModule
  ],
  exports: [
    AsidePanelComponent
  ]
})
export class AsidePanelModule { }
