import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() searchChange = new EventEmitter<string>();

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchChange.emit(query);
    console.log(query);
  }
}
