import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceService } from 'src/app/service/order-service.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer_list =[]
  search_input :string;
  classapplied = false
  constructor(private router:Router,public ApiService:OrderServiceService,private SpinnerService: NgxSpinnerService) 
  {}
   ngOnInit(): void
   {
    this.SpinnerService.show();  
    this.ApiService.Get_Customer_Detail().subscribe(data =>{
      this.SpinnerService.hide();
      this.customer_list = data
    },error =>{
      this.SpinnerService.hide();
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
  SearchBox(){
    if (this.search_input != ''){
      this.customer_list =this.customer_list.filter(res => {
        return res.Customer_id.toLocaleLowerCase().match(this.search_input.toLocaleLowerCase());
      }
      )
    
    }
    else if (this.search_input == ''){
      this.ngOnInit();}
    }
    action(){
      this.classapplied = !this.classapplied
     }
  

  addCustomer()
  {
    this.router.navigateByUrl('/Customer/Adding-Customer')
  }


}
