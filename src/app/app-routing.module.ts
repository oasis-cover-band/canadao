import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CenterPanel, outlet: 'pages'},
  {path: '', component: WalletPageComponent, outlet: 'pages'},
  {path: '', component: WalletPageComponent, outlet: 'pages'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
