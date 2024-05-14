import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user !: Iuser;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['userId'];
    this.loading = true;
    // Fetch user data based on user ID
    this.userService.getUserDetails(userId).subscribe(
      (userData: any) => {
        this.user = userData.data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

}
