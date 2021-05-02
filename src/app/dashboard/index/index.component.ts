import { Component, OnInit } from '@angular/core';
import { HomeControlService } from 'src/app/service/home-control.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title:string;
  isShowRouterLink:boolean = false
  classapplied = false
  data: string;
  constructor( private homeControl:HomeControlService) {
    
  }
   action(){
    this.classapplied = !this.classapplied
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
