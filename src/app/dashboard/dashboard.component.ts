import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  moduleName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  moduleItem(value: string){
    this.moduleName = value
  }


}
