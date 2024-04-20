import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Permission } from '../models/permission.model';
import { AddUserRequest } from '../models/create-user.model';
import { EditUserRequest } from '../models/edit-user.model';
@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})


export class DashboardContentComponent implements OnDestroy,OnInit{
  id : string = '';
  newPassword :string = ''
  toggle: boolean = false;
  delToggle :boolean = false;
  editToggle :boolean =false;
  searchText: string = '';
  paramsSubscription?: Subscription;
  createUserModel: AddUserRequest;
  editUserModel : EditUserRequest;
  isDropdownOpen: boolean = false;
  isSortToggle : boolean = false;
  selectedSortOption: string = "";
  sortOptions: string[] = ["First Name", "Last Name", "Email"];
  user: User;
  permissions :Permission[] =[]
  roles : Role[] = []
  users :User[]= []
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute,){
    this.createUserModel ={
      id : '',
      firstName : '',
      lastName  :'',
      email : '',
      roleId : '',
      phone : '',
      userName : '',
      password : '',
      Permissions: [{
        permissionId: '1',
        isReadable: true,
        isWritable: true,
        isDeletable: true
      }],
    }

    this.editUserModel ={
      firstName : '',
      lastName  :'',
      email : '',
      roleId : '',
      phone : '',
      userName : '',
      password : '',
      Permissions: [{
        permissionId: '1',
        isReadable: true,
        isWritable: true,
        isDeletable: true
      }],
    }
    this.user = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      roleId: '',
      createdDate: '',
      phone: '',
      userName: '',
      password: ''
    };
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
  onFormSubmit(){
    if(this.newPassword === this.createUserModel.password){
      this.userService.addUser(this.createUserModel).subscribe({
        next:(response)=>{
          console.log('This was successful!')
        },
      })
    }
    
  }
  getUserById(id: string) {
    this.userService.getUserById(id).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.error('Error fetching user by ID:', error);
      }
    });
  }

    


  onFormSubmit2(id:string){
    console.log(this.editUserModel)
    console.log(id)
    if(this.newPassword === this.editUserModel.password){
      this.userService.editUser(id,this.editUserModel).subscribe({
        next:(response)=>{
          console.log('This was successful!')
        },
        
      })
    }
    
  }
  
  getAllUsers(){
     this.userService.getAllUsers().subscribe({
      next:(response =>{
        this.users =  response
        this.setFormatDateToArray();

      })})
    
    }
  getAllRoles(){
    this.userService.getAllRoles().subscribe({
      next:(response =>{
        this.roles =  response
  
      })
    })
  }

  getAllPermissions(){
    this.userService.getAllPermissions().subscribe({
      next:(response =>{
        this.permissions =  response
  
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
    this.getUserById(id)
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
  
  
  searchUsers() {
    if (!this.searchText.trim()) {
      this.getAllUsers();
      return;
    }

    const searchTerm = this.searchText.toLowerCase().trim();
    this.userService.getAllUsers().subscribe({
      next: (response) => {

        this.users = response.filter((user) => {
          
          return (
            user.firstName.toLowerCase().includes(searchTerm) ||
            user.lastName.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.includes(searchTerm) ||
            user.userName.toLowerCase().includes(searchTerm)
          );
        });
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
  
 
  addUserToggle() {
    this.toggle = !this.toggle;
    // this.isBlur.emit(this.toggle)
  }

  addDeleteToggle(){
    this.delToggle = !this.delToggle
  }

  sortToggle() {
    this.isSortToggle = !this.isSortToggle;
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
