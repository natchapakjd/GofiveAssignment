import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string = ''
  password: string = ''
  role :string =''
  firstName :string = ''
  lastName :string = ''


  isToggle : boolean = false
  ngOnInit(): void {

    this.username = localStorage.getItem("username") || '';
    this.password = localStorage.getItem("password") || '';
    this.role = localStorage.getItem("role") || '';
    this.firstName = localStorage.getItem("firstName") || '';
    this.lastName = localStorage.getItem("lastName") || '';
  }
  
  onToggle(){
    this.isToggle = !this.isToggle
    console.log(this.isToggle)
  }

  logout(){
    localStorage.clear()
  }
}
