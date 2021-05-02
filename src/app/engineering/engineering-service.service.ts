import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineeringServiceService {
  base_url = "http://127.0.0.1:8000/marketing/"  
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})


  constructor(private http:HttpClient) { }


  Get_Order_Detail():Observable<any>{
    return this.http.get(this.base_url+"Order_Detail/",{headers:this.httpHeaders})
  }

  Filter_Product_Detail(data):Observable<any>{
    return this.http.get(this.base_url + "Product_Detail_View?"+"id="+data,{headers:this.httpHeaders} )
  }

  Post_Feasibility_Details(data):Observable<any>{
    return this.http.post(this.base_url + "Feasibility_Detail_View/",data,{headers:this.httpHeaders})
  }


}
