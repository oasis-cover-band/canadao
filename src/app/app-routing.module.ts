import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavPanelComponent } from './panels/nav-panel/nav-panel.component';
import { NavPanelModule } from './panels/nav-panel/nav-panel.module';
import { CenterPanelComponent } from './panels/center-panel/center-panel.component';
import { CenterPanelModule } from './panels/center-panel/center-panel.module';
import { TopPanelComponent } from './panels/top-panel/top-panel.component';
import { TopPanelModule } from './panels/top-panel/top-panel.module';
import { AsidePanelComponent } from './panels/aside-panel/aside-panel.component';
import { AsidePanelModule } from './panels/aside-panel/aside-panel.module';

const routes: Routes = [
  {path: '', component: TopPanelComponent, outlet: 'top'},
  {path: '', component: NavPanelComponent, outlet: 'nav'},
  {path: '', component: CenterPanelComponent, outlet: 'main'},
  {path: '', component: AsidePanelComponent, outlet: 'aside'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NavPanelModule,
    CenterPanelModule,
    TopPanelModule,
    AsidePanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
