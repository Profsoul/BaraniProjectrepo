import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  search_input :string;
  classapplied= false


  constructor(private router:Router,private SpinnerService: NgxSpinnerService) { }
  action(){
    this.classapplied = !this.classapplied
   }

  ngOnInit(): void {
  }
  addEmployee()
  {
    this.router.navigateByUrl('/HR/employee/employee-details')
  }

}
