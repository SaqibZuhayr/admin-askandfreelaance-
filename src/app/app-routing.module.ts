import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminMainComponent} from './admin-main/admin-main.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DisputeComponent} from './dispute/dispute.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'main', component: AdminMainComponent,
     children: [
       { path: '', component: DashboardComponent },
       { path: 'question-list', component: QuestionListComponent },
       { path: 'user-list', component: UserListComponent },
       { path: 'dispute', component: DisputeComponent },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
