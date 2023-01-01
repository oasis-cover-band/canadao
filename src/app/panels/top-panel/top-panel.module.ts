import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPanelComponent } from './top-panel.component';
import { LogoElementModule } from 'src/app/elements/logo-element/logo-element.module';
import { SearchElementModule } from 'src/app/elements/search-element/search-element.module';
import { SvgElementModule } from 'src/app/elements/svg-element/svg-element.module';



@NgModule({
  declarations: [
    TopPanelComponent
  ],
  imports: [
    CommonModule,
    SearchElementModule,
    LogoElementModule,
    SvgElementModule
  ],
  exports: [
    TopPanelComponent
  ]
})
export class TopPanelModule { }
