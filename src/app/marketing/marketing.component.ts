import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor(private router:Router) { }
  action(){
    console.log("hello soul!!")
    $('.sidebar-offcanvas').toggleClass("active");
  }
  ngOnInit(): void {
  }

}
