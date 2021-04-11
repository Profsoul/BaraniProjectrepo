import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceService } from 'src/app/service/order-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer_list =[]
  constructor(private router:Router,public ApiService:OrderServiceService) 
  {
    this.ApiService.Get_Customer_Detail().subscribe(data =>{
      this.customer_list = data
    },error =>{
      Swal.fire("Error","Not Able to Get data Please Contact Server Administrator","error")
    })

  
   }

  
  action2(val){
    this.ApiService.Det_Customer_Detail(val).subscribe(data =>{
    },
    error =>{
      Swal.fire("Failure","Eroorrrr","error")
    })
   
  }

  addCustomer()
  {
    this.router.navigateByUrl('/Customer/Adding-Customer')
  }

  ngOnInit(): void
   {
  }

}
