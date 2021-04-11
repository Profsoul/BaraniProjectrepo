import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { nextTick } from 'process';
import { customerDetails, orderDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import  Swal from 'sweetalert2';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  orderDetailsForm: FormGroup
  value2:string;
  value1:any
  value:string = "demo"
  
  
  customerDetails: customerDetails[]
  
  constructor(private formbuilder: FormBuilder, private orderService: OrderServiceService,private router:Router) {
  }

  ngOnInit(): void {
    this.orderDetailsForm = this.formbuilder.group({
      Customer_id: [],
      Email_id: [],
      Customer_name: [],
      Nick_name: [],
      Address: [],
      GST_no: [],
      CIN_no: [],
      Individual_details: this.formbuilder.array([this.addIndividualDetailsGroup()]),


    })

  }

  addIndividualDetailsGroup() {
    return this.formbuilder.group({
      Customer_id :[],
      Name: [],
      Designation: [],
      Email_id: [],
      Contact: [],
    })

  };

  addAddress() {

    this.addressArray.push(this.addIndividualDetailsGroup());
  }
  removeAddress(index) {
    
    if(index != 0){
      this.addressArray.removeAt(index);
    }
  }
 
  get addressArray() {
    return <FormArray>this.orderDetailsForm.get('Individual_details');
  }



  submit() {
    let customerDetails = 
    {
      Customer_id   :  this.orderDetailsForm.value['Customer_id'],
      Email_id      :  this.orderDetailsForm.value['Email_id'],
      Customer_name :  this.orderDetailsForm.value['Customer_name'],
      Nick_name     :  this.orderDetailsForm.value['Nick_name'],
      Address       :  this.orderDetailsForm.value['Address'],
      GST_no        :  this.orderDetailsForm.value['GST_no'],
      CIN_no        :  this.orderDetailsForm.value['CIN_no'],
    }
  

    this.orderService.Post_Customer_Detail(customerDetails).subscribe(data =>{
      Swal.fire(data,'Customer detail successfully updated','success').then((result)=>{
        if (result.value){
          this.router.navigateByUrl("Marketing/Customer")
        }
      })},
    error =>{
      Swal.fire("Failed",error,'error')
    })
    
    
  }
}
