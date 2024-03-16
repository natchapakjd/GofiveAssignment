import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string = ''
  password: string = ''
  role :string =''
  firstName :string = ''
  lastName :string = ''

  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';
    this.password = localStorage.getItem("password") || '';
    this.role = localStorage.getItem("role") || '';
    this.firstName = localStorage.getItem("firstName") || '';
    this.lastName = localStorage.getItem("lastName") || '';
  }

}
