import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  icecreamType: string;
  classes = {'blue': false, 'red': true, 'underline': true};
  test = false;
  ninjas = [
    {name: "Yoshi", belt: "black"},
    {name: "Cristina", belt: "red"},
    {name: "Carlos", belt: "purple"}
    ];

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params);
    this.icecreamType = route.snapshot.params.icecreamType;
  }

  ngOnInit() {
  }

}
