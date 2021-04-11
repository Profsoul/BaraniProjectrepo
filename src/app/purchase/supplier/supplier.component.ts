import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { supplierDetails, supplierEvalution } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';

//import { NewOrderDetails, Supplier } from 'src/app/models/new-order-details';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  /*Supplier = new Supplier()
  dataarray=[];*/
  supplierform: FormGroup
  supplierDetails: supplierDetails[]
  orderDetailsForm: FormGroup;
  supplier_id: any;

  supplierEvalution: supplierEvalution[]
  supplier_details: any = [];

  supplierEvalutionForm: FormGroup
  total: number = 0
  is_able = false
  constructor(private formbuilder: FormBuilder, private orderService: OrderServiceService) { 

    
    this.supplier_id = this.orderService.supplier
  }


  ngOnInit(): void {
    debugger
    this.orderDetailsForm = this.formbuilder.group({

      Individual_details: this.formbuilder.array([this.addIndividualDetailsGroup()])
  
      })



    this.supplierId()
    this.supplierform = this.formbuilder.group({
      Supplier_id: [this.supplier_id,],
      Supplier_name: [],
      Address: [],
      Contact: [],
      Email_id: [],
      Nature_of_business: [],
      GST_no: [],
      Distributor: [],
      List_of_item: [],
      Details: [],
      Details_file: [''],
      Facilities: [],
      Facilities_file: [''],
      Information: ['bad'],
      Prepared_by: [''],
      Approved_by: ['']
    })

    this.supplierEvalutionForm = this.formbuilder.group({
      Consistent_qulity: ['',Validators.required],
      Technical_capability: [],
      Manufacturing: [],
      Financial_capability:[],
      Urgent_need:[],
      Quality_management:[],
      Meeting_delivery:[],
      Total:[this.total,],
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
    this.addressArray.removeAt(index);
  }
  get addressArray() {
    return <FormArray>this.orderDetailsForm.get('Individual_details');
  }

  totalCalculation(){
    debugger
    let form = this.supplierEvalutionForm.value
    this.total =+ (form['Consistent_qulity']+form['Technical_capability']+form['Manufacturing']+form['Financial_capability']
     +form['Urgent_need']+form['Quality_management']+form['Meeting_delivery'])
  }
  

  submit() {
    this.is_able = true;
    this.orderService.post_supplier_details(this.supplierform.value)
      .subscribe(data => {
        console.log(data)
      },
        error => {
          console.log(error)
        })
  }
  testing(){
    console.log()
  }

  supplierId() {
    let date = new Date();
    this.supplier_id = (date.getDate() + (date.getMonth() + 1).toString() + date.getHours() + date.getSeconds()).toString()

  }

}
