import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {OrderServiceService} from 'src/app/service/order-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  data :string;
  test=[]
  classapplied = false
  time:any;
  date:any;
  val = true
  orderDetailsForm: FormGroup;
  


  constructor(private service:OrderServiceService,private router:Router ,private SpinnerService: NgxSpinnerService,private formbuilder: FormBuilder,private route:ActivatedRoute) {
    this.data = this.route.snapshot.params.id
    service.Cet_Customer_Detail(this.data).subscribe(
      data =>{
        this.SpinnerService.show();
       
        this.orderDetailsForm.setValue({
          Customer_id   :data['Customer_id'],
          Email_id      : data['Email_id'],
          Customer_name : data['Customer_name'],
          Nick_name     : data['Nick_name'],
          Address       : data['Address'],
          GST_no        : data['GST_no'],
          CIN_no        : data['CIN_no']
    
        })
        this.SpinnerService.hide();
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


  ngOnInit(): void { }
  result(){
    this.orderDetailsForm.enable();
    document.getElementById("update").hidden = false
    document.getElementById("delete").hidden = false
    

  }
  action(){
    this.classapplied = !this.classapplied
   }
  delete(){
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Customer anymore!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.SpinnerService.show()
        this.service.Det_Customer_Detail(this.data).subscribe(data=>{
          this.SpinnerService.hide()
          Swal.fire(
            'Deleted!',
            'The Customer has been deleted Sucessfully.',
            'success'
          ).then((result)=>{
            if (result.value){
      
              this.router.navigateByUrl("Marketing/Customer")
            }
          })
         
        },error=>{
          Swal.fire(
            'Cancelled',
            'No Customer Data is Available :)',
            'error'
          )
        })
        
      
    }})
    }

  update(){

    let updated_customerDetails = { 
    Customer_id   :  this.data,
    Email_id      :  this.orderDetailsForm.value['Email_id'],
    Customer_name :  this.orderDetailsForm.value['Customer_name'],
    Nick_name     :  this.orderDetailsForm.value['Nick_name'],
    Address       :  this.orderDetailsForm.value['Address'],
    GST_no        :  this.orderDetailsForm.value['GST_no'],
    CIN_no        :  this.orderDetailsForm.value['CIN_no'],
   }
   console.log(updated_customerDetails)
this.SpinnerService.show()   
this.service.Upt_Customer_Detail(this.orderDetailsForm.value['Customer_id'],updated_customerDetails).subscribe(data=>{
  this.SpinnerService.hide();
  Swal.fire("Updated Successfully","Updated Succcessfully to the server","success").then((result)=>{ 
  if (result.value){

    this.router.navigateByUrl("Marketing/Customer")
  }
})},
error=>{Swal.fire("Failed to update","Failed to update information","error").then((result)=>{
  if (result.value){

    this.router.navigateByUrl("Marketing/Customer")
  }
})})

  }


}
