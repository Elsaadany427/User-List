import { Component } from '@angular/core';
import { Iuser } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: Iuser[] = [];
  filteredUsers: Iuser[] = [];
  currentPage = 1;
  totalPages = 1;
  totalPagesArray: number[] = [];
  private loadingSubject: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(false);
  public loading$: Observable<boolean | null> = this.loadingSubject.asObservable();
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loadingSubject.next(true);
    this.userService.getUsers(this.currentPage).subscribe((data: any) => {
      this.users = data.data;
      this.totalPages = data.total_pages;
      this.totalPagesArray = Array.from(
        { length: this.totalPages },
        (_, i) => i + 1
      );
      this.applySearchFilter('');
      this.loadingSubject.next(false);
    },
    (error: any) => {
      console.error('Error fetching user data:', error);
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }

  applySearchFilter(query: string): void {
    this.filteredUsers = this.users.filter((user) =>
      user.id.toString().includes(query.toLowerCase())
    );
  }

  onSearchChange(query: string): void {
    this.applySearchFilter(query);
  }
}
