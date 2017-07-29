import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  icecreamType: string;

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params);
    this.icecreamType = route.snapshot.params.icecreamType;
  }

  ngOnInit() {
  }

}
