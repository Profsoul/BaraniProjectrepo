import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  classapplied = false 
   action(){
    this.classapplied = !this.classapplied
   }

  constructor() { }

  ngOnInit(): void {
  }

}
