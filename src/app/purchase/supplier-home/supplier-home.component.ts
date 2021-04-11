import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { supplierDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {
  supplierDetails: supplierDetails[]

  constructor(private router:Router, private orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.orderService.Get_supplier_details()
      .subscribe(item => {
        this.supplierDetails = item
      })
  }
  Kopy(){
    var input = document.body.appendChild(document.createElement("input"));
  input.value = "https://baranibackend.pythonanywhere.com/";
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  document.getElementById("soul").innerHTML="Copied!";
  document.getElementById("soul").style. backgroundColor = '#2196f3';
  }
  addSupplier(){
    this.router.navigateByUrl('supplier/add-supplier')
  }

}
