import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPanelComponent } from './top-panel.component';
import { LogoElementModule } from 'src/app/elements/logo-element/logo-element.module';
import { SearchElementModule } from 'src/app/elements/search-element/search-element.module';



@NgModule({
  declarations: [
    TopPanelComponent
  ],
  imports: [
    CommonModule,
    SearchElementModule,
    LogoElementModule
  ],
  exports: [
    TopPanelComponent
  ]
})
export class TopPanelModule { }
