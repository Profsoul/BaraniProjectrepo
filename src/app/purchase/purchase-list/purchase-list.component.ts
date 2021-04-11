import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { supplierDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

 
  
  constructor(private router:Router, private orderService: OrderServiceService) { }

  ngOnInit(): void {
  }


}

  
