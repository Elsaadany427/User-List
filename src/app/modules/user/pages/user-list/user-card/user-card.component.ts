import { Component, Input } from '@angular/core';
import { Iuser } from '../../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user!: Iuser;
  @Input() loading !: boolean | null;
  
}
