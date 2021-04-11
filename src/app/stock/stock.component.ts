import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  value: string;  
 data :any
  constructor(private router:Router) { }
  method(){
    this.router.navigateByUrl('Stock/inward')
  }
  ngOnInit(): void {
    this.data = 

  [
    {
    "items" : 'SLEEVES',
   "ShelfLife":12,
    "Preservation" :"STACKING(10 ROWS MAX)",
    "Location":"STORE ROOM",
    "Quantity":15,
    "Min":10
  },
  
  {
    "items" :"SHELL CORE",
    "ShelfLife":12,
    "Preservation" :"STACKING(2 ROWS MAX)",
    "Location":"STORE ROOM",
    "Quantity":35,
    "Min":10
  },
  {
    "items" :"OIL",
    "ShelfLife":6,
    "Preservation" :"STACKING(1 ROWS MAX) ",
    "Location":"STORE ROOM",
    "Quantity":30,
    "Min":20},
    {
      "items" : "CATALYST",
      "ShelfLife":12,
      "Preservation" :"STACKING(5 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":15,
      "Min":10
    }
    ,
    {
      "items" : "COATING",
      "ShelfLife":6,
      "Preservation" :"STACKING (2 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":90,
      "Min":10
    }
    ,
    {
      "items" : "CORE OIL",
      "ShelfLife":6,
      "Preservation" :"STACKING (1 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":80,
      "Min":10
    }
    ,
    {
      "items" : "PATTERN OIL",
      "ShelfLife":6,
      "Preservation" :"STACKING (1 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":60,
      "Min":10
    }
    ,
    {
      "items" : "STEEL SHOTS",
      "ShelfLife":12,
      "Preservation" :"STACKING (15 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":50,
      "Min":10
    }
    ,
    {
      "items" : "METAL PASTE",
      "ShelfLife":2,
      "Preservation" :"STACKING (2 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":20,
      "Min":10
    },
  
    {
      "items" :"SHELL CORE",
      "ShelfLife":12,
      "Preservation" :"STACKING(2 ROWS MAX)",
      "Location":"STORE ROOM",
      "Quantity":35,
      "Min":10
    },
    {
      "items" :"OIL",
      "ShelfLife":6,
      "Preservation" :"STACKING(1 ROWS MAX) ",
      "Location":"STORE ROOM",
      "Quantity":30,
      "Min":20},
      {
        "items" : "CATALYST",
        "ShelfLife":12,
        "Preservation" :"STACKING(5 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":15,
        "Min":10
      }
      ,
      {
        "items" : "COATING",
        "ShelfLife":6,
        "Preservation" :"STACKING (2 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":90,
        "Min":10
      }
      ,
      {
        "items" : "CORE OIL",
        "ShelfLife":6,
        "Preservation" :"STACKING (1 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":80,
        "Min":10
      }
      ,
      {
        "items" : "PATTERN OIL",
        "ShelfLife":6,
        "Preservation" :"STACKING (1 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":60,
        "Min":10
      }
      ,
      {
        "items" : "STEEL SHOTS",
        "ShelfLife":12,
        "Preservation" :"STACKING (15 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":50,
        "Min":10
      }
      ,
      {
        "items" : "METAL PASTE",
        "ShelfLife":2,
        "Preservation" :"STACKING (2 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":20,
        "Min":10
      },
  
      {
        "items" :"SHELL CORE",
        "ShelfLife":12,
        "Preservation" :"STACKING(2 ROWS MAX)",
        "Location":"STORE ROOM",
        "Quantity":35,
        "Min":10
      },
      {
        "items" :"OIL",
        "ShelfLife":6,
        "Preservation" :"STACKING(1 ROWS MAX) ",
        "Location":"STORE ROOM",
        "Quantity":30,
        "Min":20},
        {
          "items" : "CATALYST",
          "ShelfLife":12,
          "Preservation" :"STACKING(5 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":15,
          "Min":10
        }
        ,
        {
          "items" : "COATING",
          "ShelfLife":6,
          "Preservation" :"STACKING (2 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":90,
          "Min":10
        }
        ,
        {
          "items" : "CORE OIL",
          "ShelfLife":6,
          "Preservation" :"STACKING (1 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":80,
          "Min":10
        }
        ,
        {
          "items" : "PATTERN OIL",
          "ShelfLife":6,
          "Preservation" :"STACKING (1 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":60,
          "Min":10
        }
        ,
        {
          "items" : "STEEL SHOTS",
          "ShelfLife":12,
          "Preservation" :"STACKING (15 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":50,
          "Min":10
        }
        ,
        {
          "items" : "METAL PASTE",
          "ShelfLife":2,
          "Preservation" :"STACKING (2 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":20,
          "Min":10
        },
  
        {
          "items" :"SHELL CORE",
          "ShelfLife":12,
          "Preservation" :"STACKING(2 ROWS MAX)",
          "Location":"STORE ROOM",
          "Quantity":35,
          "Min":10
        },
        {
          "items" :"OIL",
          "ShelfLife":6,
          "Preservation" :"STACKING(1 ROWS MAX) ",
          "Location":"STORE ROOM",
          "Quantity":30,
          "Min":20},
          {
            "items" : "CATALYST",
            "ShelfLife":12,
            "Preservation" :"STACKING(5 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":15,
            "Min":10
          }
          ,
          {
            "items" : "COATING",
            "ShelfLife":6,
            "Preservation" :"STACKING (2 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":90,
            "Min":10
          }
          ,
          {
            "items" : "CORE OIL",
            "ShelfLife":6,
            "Preservation" :"STACKING (1 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":80,
            "Min":10
          }
          ,
          {
            "items" : "PATTERN OIL",
            "ShelfLife":6,
            "Preservation" :"STACKING (1 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":60,
            "Min":10
          }
          ,
          {
            "items" : "STEEL SHOTS",
            "ShelfLife":12,
            "Preservation" :"STACKING (15 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":50,
            "Min":10
          }
          ,
          {
            "items" : "METAL PASTE",
            "ShelfLife":2,
            "Preservation" :"STACKING (2 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":20,
            "Min":10
          },
  
          {
            "items" :"SHELL CORE",
            "ShelfLife":12,
            "Preservation" :"STACKING(2 ROWS MAX)",
            "Location":"STORE ROOM",
            "Quantity":35,
            "Min":10
          },
          {
            "items" :"OIL",
            "ShelfLife":6,
            "Preservation" :"STACKING(1 ROWS MAX) ",
            "Location":"STORE ROOM",
            "Quantity":30,
            "Min":20},
            {
              "items" : "CATALYST",
              "ShelfLife":12,
              "Preservation" :"STACKING(5 ROWS MAX)",
              "Location":"STORE ROOM",
              "Quantity":15,
              "Min":10
            }
            ,
            {
              "items" : "COATING",
              "ShelfLife":6,
              "Preservation" :"STACKING (2 ROWS MAX)",
              "Location":"STORE ROOM",
              "Quantity":90,
              "Min":10
            }
            ,
            {
              "items" : "CORE OIL",
              "ShelfLife":6,
              "Preservation" :"STACKING (1 ROWS MAX)",
              "Location":"STORE ROOM",
              "Quantity":80,
              "Min":10
            }
            ,
            {
              "items" : "PATTERN OIL",
              "ShelfLife":6,
              "Preservation" :"STACKING (1 ROWS MAX)",
              "Location":"STORE ROOM",
              "Quantity":60,
              "Min":10
            }
            ,
            {
              "items" : "STEEL SHOTS",
              "ShelfLife":12,
              "Preservation" :"STACKING (15 ROWS MAX)",
              "Location":"STORE ROOM",
              "Quantity":50,
              "Min":10
            }
            ,
            {
              "items" : "METAL PASTE",
              "ShelfLife":2,
              "Preservation" :"STACKING (2 ROWS MAX)",
              "Location":"STORE ROOM",
              "Quantity":20,
              "Min":10
            }
        
      
    
  

  ]
  }
    SearchBox(){
    if (this.value != ''){
      this.data =this.data.filter(res => {
        return res.items.toLocaleLowerCase().match(this.value.toLocaleLowerCase());
      }
      )
    
    }
    else if (this.value == ''){
      this.ngOnInit();}
    }


}
