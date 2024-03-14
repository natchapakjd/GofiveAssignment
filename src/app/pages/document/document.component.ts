import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DocumentContentComponent } from './document-content/document-content.component';
@Component({
  selector: 'app-document',
  standalone: true,
  imports: [SideBarComponent,HeaderComponent,DocumentContentComponent],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {

}
