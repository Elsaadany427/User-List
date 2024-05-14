import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';
import { UserCardComponent } from './pages/user-list/user-card/user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './pages/user-list/user-details/user-details.component';
@NgModule({
  declarations: [UserListComponent, UserComponent, UserCardComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
