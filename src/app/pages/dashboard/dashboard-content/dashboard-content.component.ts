import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {

  toggle: boolean = false;
  delToggle :boolean = false;
  editToggle :boolean =false;
  searchText: string = '';
  // @Output() isBlur  = new EventEmitter();

  users = [
    { firstName: "David", lastName: "Wagner", email: "david_wagner@example.com", role: "Super Admin", createdDate: "24 Otc, 2015" },
    { firstName: "Ina", lastName: "Hogan", email: "windler.warren@runte.net", role: "Admin", createdDate: "24 Otc, 2015" },
    { firstName: "Devin", lastName: "Harmon", email: "wintheiser_enos@yahoo.com", role: "HR Admin", createdDate: "18 Dec, 2015" },
    { firstName: "Lena", lastName: "Page", email: "camila_ledner@gmail.com", role: "Employee", createdDate: "8 Otc, 2016" },
    { firstName: "Eula", lastName: "Horton", email: "edula_dorton1221@gmail.com", role: "Super Admin", createdDate: "15 Jun, 2017" },
    { firstName: "Victoria", lastName: "Perez", email: "terrill.wiza@hotmail.com", role: "HR Admin", createdDate: "12 Jan, 2019" },
    { firstName: "Cora", lastName: "Medina", email: "hagenes.isai@hotmail.com", role: "Employee", createdDate: "21 July, 2020" },

  ]
   filteredUsers() {
    return this.users.filter(user => {
      return user.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.createdDate.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
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

  sortUsersByRole() {
    this.users.sort((a, b) => {
      return a.role.localeCompare(b.role);
    });
  }

  sortUsersByCreatedDate() {
    this.users.sort((a, b) => {
      // Assuming date format is consistent, you may need to parse the date string to compare properly
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      return dateA.getTime() - dateB.getTime();
    });
  }
}
