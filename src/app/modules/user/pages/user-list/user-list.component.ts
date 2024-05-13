import { Component } from '@angular/core';
import { Iuser } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: Iuser[] = [
    { id: 1, first_name: 'John', last_name: 'Bassem', avatar: "https://reqres.in/img/faces/3-image.jpg", email:"emma.wong@reqres.in", age:5},
  ];
}
