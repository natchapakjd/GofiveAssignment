import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-document-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './document-content.component.html',
  styleUrl: './document-content.component.css'
})
export class DocumentContentComponent {
  documents = [
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    { name: 'Lorem ipsum', date: 'April 9, 2022', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi error architecto' },
    // Add more documents as needed
  ];

  
}
