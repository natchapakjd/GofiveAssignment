import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})


export class DashboardContentComponent{

  toggle: boolean = false;
  delToggle :boolean = false;
  editToggle :boolean =false;
  searchText: string = '';
  
  id :string | null = null;
  paramsSubscription?: Subscription;
  // @Output() isBlur  = new EventEmitter();


  constructor(private userService:UserService,private router:Router){
  }
 
  
  formatDate(dateString: string) : string{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // แยกวันที่และเวลาออกจากกัน
    const parts = dateString.split('T');
    
    // แยกวันที่เป็นส่วนเดียวกัน กับ แยกวันที่ เดือน และปี
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
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next:(response =>{
        this.users =  response
        console.log(this.users)
        this.setFormatDateToArray();

      })
    })
    
    
  }

  users :User[]= []
  //  filteredUsers() {
  //   return this.users.filter(user => {
  //     return user.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //       user.lastName.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //       user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //       user.role.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //       user.createdDate.toLowerCase().includes(this.searchText.toLowerCase());
  //   });
  // }
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

  // sortUsersByRole() {
  //   this.users.sort((a, b) => {
  //     return a.role.localeCompare(b.role);
  //   });
  // }

  // sortUsersByCreatedDate() {
  //   this.users.sort((a, b) => {
  //     // Assuming date format is consistent, you may need to parse the date string to compare properly
  //     const dateA = new Date(a.createdDate);
  //     const dateB = new Date(b.createdDate);
  //     return dateA.getTime() - dateB.getTime();
  //   });
  // }
}
