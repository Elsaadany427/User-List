import { Component } from '@angular/core';
import { Iuser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: Iuser[] = [];
  currentPage = 1;
  totalPages: any = 1;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.currentPage).subscribe((data: any) => {
      this.users = data.data;
      this.totalPages = data.total_pages;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }
}
