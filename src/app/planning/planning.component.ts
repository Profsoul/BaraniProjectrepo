import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  orderDetailsForm: FormGroup;
  

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderDetailsForm = this.formbuilder.group({

      Individual_details: this.formbuilder.array([this.addIndividualDetailsGroup()])
  
      })
  }
  addIndividualDetailsGroup() {
    return this.formbuilder.group({
      //Customer_id : formValue['Customer_id'],
      ID:[''],
      GRN:[''],
      Name:[''],
      Invoice:[''],
      Date:[''],
      Item:[''],
      Type:[''],
      UOM:[''],
      PO:[''],
      Receive:[''],
      Supplier:[''],
      Rate:[''],
      Amount:[''],
      CGST:[''],
      SGST:[''],
      IGST:[''],
      Total:[''],
      Rejection:['']
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





}
