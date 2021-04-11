import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HomeControlService } from 'src/app/service/home-control.service';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css']
})
export class HomeModuleComponent implements OnInit {

  @Output() moduleItemName = new EventEmitter<string>();

  titleValue:string = ''

  isPlanning:boolean=false
  isPurchase:boolean=false
  isStock:boolean=false
  isMarketing:boolean=false
  isProduction:boolean=false
  isQuality:boolean=false
  isEngineering:boolean=false
  ishome:boolean=true
  
  title = [
    {'title':"Planning" , "imgUrl":"plan.jpg" },
    {'title':"Purchase" , "imgUrl":"purchase.jpg" },
    {'title':"Stock" , "imgUrl":"stock.jpg" },
    {'title':"Marketing" , "imgUrl":"marketing.jpg" },
    {'title':"Production" , "imgUrl":"production.jpg" },
    {'title':"Quality" , "imgUrl":"checking.jpg" },
    {'title':"Engineering", "imgUrl":"engineering.jpg"} ]

  
  
    data: string;
  constructor( private homeControl:HomeControlService) { }

  ngOnInit(): void {
    this.homeControl.data$.subscribe(res => this.data = res)
  }
  action(value: string){
   
    this.homeControl.changeData(value);
    this.ishome = false
  }


}
