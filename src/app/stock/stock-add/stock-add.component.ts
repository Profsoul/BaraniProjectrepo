import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit {
  classapplied = false
  orderDetailsForm: FormGroup;
  
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderDetailsForm = this.formbuilder.group({

      Individual_details: this.formbuilder.array([this.addIndividualDetailsGroup()])
  
      })
  }
  action(){
    this.classapplied = !this.classapplied
   }
  addIndividualDetailsGroup() {
    return this.formbuilder.group({
      Item:[''],
      Stock:[''],
      Quantity:[''],
      Unit:[''],
      Period:[''],
      Location:['']
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
