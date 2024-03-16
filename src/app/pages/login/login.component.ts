import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username :string = '';
  password :string = '';
  

  login(){
    
    localStorage.setItem("username",this.username)
    localStorage.setItem("password",this.password)
    localStorage.setItem("role","Admin")
    localStorage.setItem("firstName","Lekan")
    localStorage.setItem("lastName","Okeowo")
    window.location.href = "document"
  }
}
