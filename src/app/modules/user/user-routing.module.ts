import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user.component"
import {UserListComponent} from "./pages/user-list/user-list.component"

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
        path: 'user/:userId',
        component: UserListComponent,
      },
      {
        path: '',
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
