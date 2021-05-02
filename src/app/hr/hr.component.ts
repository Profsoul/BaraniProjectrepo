import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  classapplied = false 
   action(){
    this.classapplied = !this.classapplied
   }

  constructor() { }

  ngOnInit(): void {
  }

}
