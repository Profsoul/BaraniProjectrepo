import { Component, OnInit } from '@angular/core';

import { NewOrderDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  classapplied = false
  NewOrderDetails : NewOrderDetails[]
  listFilter: string;
  constructor( private orderService:OrderServiceService) { }
  action(){
    this.classapplied = !this.classapplied
   }

  ngOnInit(): void {
    this.orderService.Get_Customer_Detail()
    .subscribe(data => {
      this.NewOrderDetails = data
    })

  }

 
  
  filterBycustomerName(){
    if(this.listFilter!=='') {
      this.NewOrderDetails =this.NewOrderDetails.filter(res => {
        return res.Customer_name.toLocaleLowerCase().indexOf(this.listFilter.toLocaleLowerCase()) !== -1;
      })
    }
    else if (this.listFilter == '') {
      this.ngOnInit()
    }
  }

}
