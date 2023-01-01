import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsPageComponent } from 'src/app/pages/groups-page/groups-page.component';
import { GroupsPageModule } from 'src/app/pages/groups-page/groups-page.module';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';
import { QuestionsPageComponent } from 'src/app/pages/questions-page/questions-page.component';
import { QuestionsPageModule } from 'src/app/pages/questions-page/questions-page.module';
import { TopicsPageComponent } from 'src/app/pages/topics-page/topics-page.component';
import { TopicsPageModule } from 'src/app/pages/topics-page/topics-page.module';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'dashboard', component: HomePageComponent},
    {path: 'questions', component: QuestionsPageComponent},
    {path: 'topics', component: TopicsPageComponent},
    {path: 'groups', component: GroupsPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomePageModule,
    QuestionsPageModule,
    TopicsPageModule,
    GroupsPageModule
  ],
  exports: [RouterModule]
})
export class CenterPanelRoutingModule { }