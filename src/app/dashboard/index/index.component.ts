import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

import { HomeControlService } from 'src/app/service/home-control.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title:string;
  isShowRouterLink:boolean = false
  data: string;
  constructor( private homeControl:HomeControlService) {
    
  } 
   
  ngOnInit(): void {
    this.homeControl.data$.subscribe(res => this.data = res)
    console.log('hello' + this.data)
  }

  addItem(newItem: string) {
    debugger
    this.title = newItem;
    if(this.title == 'Purchase'){
      this.isShowRouterLink = true
    }
  }

 
}
