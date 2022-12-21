import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPanelComponent } from './panels/search-panel/search-panel.component';
import { SearchPanelModule } from './panels/search-panel/search-panel.module';
import { NavPanelComponent } from './panels/nav-panel/nav-panel.component';
import { NavPanelModule } from './panels/nav-panel/nav-panel.module';
import { CenterPanelComponent } from './panels/center-panel/center-panel.component';
import { CenterPanelModule } from './panels/center-panel/center-panel.module';

const routes: Routes = [
  {path: '', component: SearchPanelComponent, outlet: 'search'},
  {path: '', component: NavPanelComponent, outlet: 'nav'},
  {path: '', component: CenterPanelComponent, outlet: 'main'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SearchPanelModule,
    NavPanelModule,
    CenterPanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
