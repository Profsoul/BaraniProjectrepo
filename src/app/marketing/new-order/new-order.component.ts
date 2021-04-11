import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { customerDetails, orderDetails, } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  orderDetailsForm: FormGroup
  productDetailsForm: FormGroup

  customerDetails: customerDetails[]
  orderDetails: orderDetails[]
  newOrderData = []

  RFQ_id: string = ''
  data:any
  isSelect: Boolean = false;
  isPaymentTermsDays: Boolean = false;

  

  constructor(private formbuilder: FormBuilder, private orderService: OrderServiceService,private route:ActivatedRoute) { 
    this.data = this.route.snapshot.params.id
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
      RFQ_id: [this.RFQ_id,],
      Product_id: [],
      Part_name: [],
      Part_code: [],
      Casting_type: [],
      Machinary_type: [null,],
      Ventor_code: [],
      Pattern_scope: ['',],
      Painting_method: [],
      Packing_type: [],
      Transport: [],
      Payment_terms: [],
      Payments_terms_days: [null,],
      Export_required: [],
      Quantity: [],
      Is_feasiable: [],
      RFQ_detail: ['1234',],

    })
    this.orderService.Get_Customer_Detail()
      .subscribe(item => {
        this.customerDetails = item
      })

  }

  addIndividualDetailsGroup() {
    return this.formbuilder.group({
      Name: ['',],
      Designation: ['',],
      Email_id: ['',],
      Contact: [],
    })
  }; 

  addAddress() {
    debugger
    this.addressArray.push(this.addIndividualDetailsGroup());
  }
  removeAddress(index) {
    debugger
    if(index != 0){
      this.addressArray.removeAt(index);
    }
  }
  get addressArray() {
    return <FormArray>this.orderDetailsForm.get('Individual_details');
  }

  showCastingSelect() {
    let val = this.orderDetailsForm.value
    if ((val['Casting_type'] !== '') && (val['Casting_type'] === 'Machinary')) {
      this.isSelect = true
    }
    if ((val['Casting_type'] !== '') && (val['Casting_type'] === 'rough')) {
      this.isSelect = false
    }
    else {
      this.isSelect = this.isSelect
    }
  }

  showPaymentTermsDays() {
    let val = this.orderDetailsForm.value
    debugger
    if ((val['Payment_terms'] !== '') && (val['Payment_terms'] === 'days')) {
      this.isPaymentTermsDays = true
    }
    if ((val['Payment_terms'] !== '') && (val['Payment_terms'] === 'immediate')) {
      this.isPaymentTermsDays = false
    }
  };

  generateRFQ_ID() {
    let date = new Date();
    let NK = this.orderDetailsForm.value
    NK = NK['Nick_name']
    this.RFQ_id = (NK + date.getDate() + (date.getMonth() + 1).toString() + date.getHours()).toString()
  }

  submit() {

    let value = this.orderDetailsForm.value;
   
    this.newOrderData = JSON.parse(localStorage.getItem('orderData'))
    if(this.newOrderData == null){
      this.newOrderData = []
    }
    this.newOrderData.push(value)
    localStorage.setItem('orderData', JSON.stringify(this.newOrderData))
    alert(`Data add successfully`)
    
  }


}
