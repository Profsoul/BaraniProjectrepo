import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  classapplied = false

  constructor(private router:Router) { }
  action(){
    this.classapplied = !this.classapplied
  }
  ngOnInit(): void {
  }

}
