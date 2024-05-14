import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component"
import {UserListComponent} from "./pages/user-list/user-list.component"
import { UserDetailsComponent } from './pages/user-list/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'users-list',
        component: UserListComponent,
      },
      {
        path: 'user-details/:userId',
        component: UserDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'users-list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
