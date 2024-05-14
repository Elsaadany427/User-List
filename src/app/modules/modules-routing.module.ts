import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./user/user.module').then(
            m => m.UserModule
          ),
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}