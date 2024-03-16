import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarComponent,HeaderComponent,DashboardContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  handleBlur(blur: boolean) {
    console.log(blur);
    const flexElement = document.querySelector('#side-bar');
    if (flexElement) {
      if (blur === true) {
        flexElement.classList.add('blurred');
      } else {
        flexElement.classList.remove('blurred');
      }
    }
  }
  
  
}
