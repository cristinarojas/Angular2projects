import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  title = 'Hola';
  name = 'Ninja';

  // Sharing this variable to other component
  // variable
  lastName: string;

  // Object
  myObject = {
    name: "Efrain",
    belt: "Red"
  };

  constructor() {
    this.lastName = 'Zamora';
  }
}
