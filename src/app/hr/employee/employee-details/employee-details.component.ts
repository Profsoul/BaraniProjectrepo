import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  classapplied = false 
   action(){
    this.classapplied = !this.classapplied
   }

  constructor() { }

  ngOnInit(): void {
  }

}
