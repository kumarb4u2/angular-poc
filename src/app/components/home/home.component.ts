import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // implicit type, feature of TS
  homeLikes = 1000; // assume number by assignment, not any type
   
  constructor() { }

  ngOnInit() {
  }

}
