import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {

  toggle : boolean = false;

  // @Output() isBlur  = new EventEmitter();

  users=[
    {firstName:"David",lastName:"Wagner",email:"david_wagner@example.com",role:"Super Admin",createdDate:"24 Otc, 2015"},
    {firstName:"Ina",lastName:"Hogan",email:"windler.warren@runte.net",role:"Admin",createdDate:"24 Otc, 2015"},
    {firstName:"Devin",lastName:"Harmon",email:"wintheiser_enos@yahoo.com",role:"HR Admin",createdDate:"18 Dec, 2015"},
    {firstName:"Lena",lastName:"Page",email:"camila_ledner@gmail.com",role:"Employee",createdDate:"8 Otc, 2016"},
    {firstName:"Eula",lastName:"Horton",email:"edula_dorton1221@gmail.com",role:"Super Admin",createdDate:"15 Jun, 2017"},
    {firstName:"Victoria",lastName:"Perez",email:"terrill.wiza@hotmail.com",role:"HR Admin",createdDate:"12 Jan, 2019"},
    {firstName:"Cora",lastName:"Medina",email:"hagenes.isai@hotmail.com",role:"Employee",createdDate:"21 July, 2020"},

  ]
  
 addUserToggle(){
    this.toggle = !this.toggle;
    // this.isBlur.emit(this.toggle)
    
  }
}
