import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavPanelComponent } from './panels/nav-panel/nav-panel.component';
import { NavPanelModule } from './panels/nav-panel/nav-panel.module';
import { TopPanelComponent } from './panels/top-panel/top-panel.component';
import { TopPanelModule } from './panels/top-panel/top-panel.module';
import { AsidePanelComponent } from './panels/aside-panel/aside-panel.component';
import { AsidePanelModule } from './panels/aside-panel/aside-panel.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { QuestionsPageModule } from './pages/questions-page/questions-page.module';
import { TopicsPageComponent } from './pages/topics-page/topics-page.component';
import { TopicsPageModule } from './pages/topics-page/topics-page.module';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { GroupsPageModule } from './pages/groups-page/groups-page.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersPageModule } from './pages/users-page/users-page.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserPageModule } from './pages/user-page/user-page.module';

const routes: Routes = [
  {path: '', component: TopPanelComponent, outlet: 'top'},
  {path: '', component: NavPanelComponent, outlet: 'nav'},
  // { path: '',
  //   loadChildren: () => import('./panels/center-panel/center-panel.module').then(m => m.CenterPanelModule),
  //   outlet: 'main'
  // },
  {path: '', redirectTo: 'home', pathMatch: 'full', outlet: 'main'},
  {path: 'home', component: HomePageComponent, outlet: 'main'},
  {path: 'dashboard', component: HomePageComponent, outlet: 'main'},
  {path: 'questions', component: QuestionsPageComponent, outlet: 'main'},
  {path: 'topics', component: TopicsPageComponent, outlet: 'main'},
  {path: 'groups', component: GroupsPageComponent, outlet: 'main'},
  {path: 'users', component: UsersPageComponent, outlet: 'main'},
  {path: 'user/:userId', component: UserPageComponent, outlet: 'main'},
  {path: '', component: AsidePanelComponent, outlet: 'aside'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NavPanelModule,
    TopPanelModule,
    AsidePanelModule,
    HomePageModule,
    QuestionsPageModule,
    TopicsPageModule,
    GroupsPageModule,
    UsersPageModule,
    UserPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
