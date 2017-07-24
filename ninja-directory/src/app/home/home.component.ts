// Dependencies
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the home page";
  dinamicValue = "I'm dinamic value";
  myBoolean = true;
  stringValue = "Im string text";
  stringBoolean = false;

  ninja = {
    name: "Cristina",
    belt: "Black"
  };

  alertMe(value) {
    alert(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
