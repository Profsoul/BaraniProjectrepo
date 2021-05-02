import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-order',
  templateUrl: './existing-order.component.html',
  styleUrls: ['./existing-order.component.css']
})
export class ExistingOrderComponent implements OnInit {
  classapplied = false

  constructor() { }
  action(){
    this.classapplied = !this.classapplied
   }

  ngOnInit(): void {
  }

}
