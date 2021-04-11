import { Component } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newerp';
  constructor( private orderService: OrderServiceService){

  }
  ngOnInit():void{

    this.orderService.Get_supplier_details()
    .subscribe(item => {
      this.orderService.supplier = item
    })
  
  }
}
