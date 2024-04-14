import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Permission } from '../models/permission.model';
@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})


export class DashboardContentComponent implements OnDestroy,OnInit{
  id : string = '';
  toggle: boolean = false;
  delToggle :boolean = false;
  editToggle :boolean =false;
  searchText: string = '';
  paramsSubscription?: Subscription;


  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute,){
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
  
  formatDate(dateString: string) : string{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const parts = dateString.split('T');
    
    const dateParts = parts[0].split('-');
    const day = dateParts[2];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const month = months[monthIndex];
    const year = dateParts[0];
    
    console.log(this.users.length)
    return `${day} ${month}, ${year}`
}

  setFormatDateToArray(){
    for(let i = 0 ; i < this.users.length ;i++){
      this.users[i].createdDate = this.formatDate(this.users[i].createdDate)
    }
  }

  getAllUsers(){ this.userService.getAllUsers().subscribe({
    next:(response =>{
      this.users =  response
      console.log(this.users)
      this.setFormatDateToArray();

    })
  })}
  getAllRoles(){
    this.userService.getAllRoles().subscribe({
      next:(response =>{
        this.roles =  response
        console.log(this.roles)
  
      })
    })
  }

  getAllPermissions(){
    this.userService.getAllPermissions().subscribe({
      next:(response =>{
        this.permissions =  response
        console.log(this.permissions)
  
      })
    })
  }
  ngOnInit(): void {
    this.getAllUsers()
    this.getAllRoles()
    this.getAllPermissions()
  }
  setId(id : string){
    this.id = id
  }
  addUser(){
    
  }
  onDelete(): void{
    if(this.id){
      this.userService.deleteUser(this.id).subscribe({
        next:(response)=>{
          window.location.href ='/dashboard'

        }
      })
    }
  }
  permissions :Permission[] =[]
  roles : Role[] = []
  users :User[]= []
 
  addUserToggle() {
    this.toggle = !this.toggle;
    // this.isBlur.emit(this.toggle)
  }

  addDeleteToggle(){
    this.delToggle = !this.delToggle
  }

  addEditToggle(){
    this.editToggle = !this.editToggle

  }
  saveSearch() {
    localStorage.setItem("searchQuery", ".......")
  }


  sortUsersByFirstName() {
    this.users.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  }

  sortUsersByLastName() {
    this.users.sort((a, b) => {
      return a.lastName.localeCompare(b.lastName);
    });
  }

  sortUsersByEmail() {
    this.users.sort((a, b) => {
      return a.email.localeCompare(b.email);
    });
  }

}
