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


  constructor(private router:Router,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  addEmployee()
  {
    this.router.navigateByUrl('/HR/employee/employee-details')
  }

}
