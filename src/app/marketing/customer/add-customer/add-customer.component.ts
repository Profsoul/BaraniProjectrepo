import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { customerDetails, orderDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import  Swal from 'sweetalert2';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  orderDetailsForm: FormGroup
  customer_id:string;
  customer:string;
  click:boolean = false;
  
  
  customerDetails: customerDetails[]
  
  constructor(private formbuilder: FormBuilder ,private SpinnerService: NgxSpinnerService, private orderService: OrderServiceService,private router:Router) {
      let year = new Date().getFullYear();
      let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
      this.customer = 'BFPL-'+year+'-'+month+'-'

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

  verify(){

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

    this.SpinnerService.show();
    this.orderService.Post_Customer_Detail(customerDetails).subscribe(data =>{
    
    this.SpinnerService.hide()
      Swal.fire(data,'Customer detail successfully updated','success').then((result)=>{
        if (result.value){
          document.getElementById('verify').innerHTML="Verified!!!";
          document.getElementById('verify').style.backgroundColor = '#5cb85c';
          this.click = true;
          document.getElementById('individual').hidden = false

        }
      })},
    error =>{
      this.SpinnerService.hide()
      Swal.fire("Failed",error,'error')
    })
    
    }

  submit() {
    console.log(this.addressArray.value,this.orderDetailsForm.get("Customer_id").value)
    this.orderService.Post_Individual_Detail(this.addressArray.value).subscribe(data =>{Swal.fire("Sucessfully Submit!!",data,"success")},
    error =>{Swal.fire("error!!!","Unable to Upload to Server","error")})
    
  }
  Generate(){
  this.customer_id = ""
  this.customer_id= this.customer+this.orderDetailsForm.value['Nick_name'][0].toLocaleUpperCase()+this.orderDetailsForm.value['Nick_name'].slice(this.orderDetailsForm.value['Nick_name'].length-1).toLocaleUpperCase(); }
}
