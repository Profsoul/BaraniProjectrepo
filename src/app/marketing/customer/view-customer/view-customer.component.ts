import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {OrderServiceService} from 'src/app/service/order-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  data :string;
  test=[]
  time:any;
  date:any;
  val = true
  orderDetailsForm: FormGroup;
  


  constructor(private service:OrderServiceService ,private formbuilder: FormBuilder,private route:ActivatedRoute) {
    this.data = this.route.snapshot.params.id
    service.Cet_Customer_Detail(this.data).subscribe(
      data =>{
       
        this.orderDetailsForm.setValue({
          Customer_id   :data['Customer_id'],
          Email_id      : data['Email_id'],
          Customer_name : data['Customer_name'],
          Nick_name     : data['Nick_name'],
          Address       : data['Address'],
          GST_no        : data['GST_no'],
          CIN_no        : data['CIN_no']
    
        })
        this.time = data["Time"]
        this.date = data["Date"]

        this.orderDetailsForm.disable();

        
      },
      error =>{
        console.log(error)
      }
   
    )
  
    
    this.orderDetailsForm = this.formbuilder.group({
      Customer_id:[],
      Email_id: [],
      Customer_name: [],
      Nick_name: [],
      Address: [],
      GST_no: [],
      CIN_no: [],
    })
  }


  ngOnInit(): void {
  
    
    /**/ 
  
  }
  result(){
    this.orderDetailsForm.enable();
  }
  action(){

    let up_customerDetails = { 
    Customer_id   :  this.orderDetailsForm.value['Customer_id'],
    Email_id      :  this.orderDetailsForm.value['Email_id'],
    Customer_name :  this.orderDetailsForm.value['Customer_name'],
    Nick_name     :  this.orderDetailsForm.value['Nick_name'],
    Address       :  this.orderDetailsForm.value['Address'],
    GST_no        :  this.orderDetailsForm.value['GST_no'],
    CIN_no        :  this.orderDetailsForm.value['CIN_no'],
   }
this.service.Upt_Customer_Detail(this.orderDetailsForm.value['Customer_id'],up_customerDetails).subscribe(data=>{Swal.fire("Updated Successfully","Updated Succcessfully to the server","success")},
error=>{Swal.fire("Failed to update","Failed to update information","error")})

  }


}
