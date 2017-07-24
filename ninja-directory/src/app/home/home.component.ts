// Dependencies
import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

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

  @Input() last; // this component is receiving the data - last variable
  @Input() theObject; // this component is receiving the data - last variable

  @Output() onYell = new EventEmitter(); // Going to emmit to onYell event.

  fireYellEvent(e) {
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
