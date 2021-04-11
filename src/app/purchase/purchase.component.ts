import { Component, OnInit } from '@angular/core';
import { supplierDetails } from '../models/new-order-details';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  supplierDetails: supplierDetails[]

  constructor(private orderService: OrderServiceService) { }


  ngOnInit(): void {
    this.orderService.Get_supplier_details()
      .subscribe(item => {
        this.supplierDetails = item
      })
  }

}