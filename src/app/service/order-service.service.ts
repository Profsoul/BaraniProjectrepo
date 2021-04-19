import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class OrderServiceService {
  supplier :any;

  base_url = "http://127.0.0.1:8000/marketing/"
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  supplier_url = "https://baranibackend.pythonanywhere.com/purchase/"

  constructor(private http:HttpClient) { }

  
  Get_Customer_Detail():Observable<any>{
    return this.http.get(this.base_url + "Customer_Detail/",{headers:this.httpHeaders} )
  }
  Cet_Customer_Detail(val):Observable<any>{
    return this.http.get(this.base_url + "Customer_Detail/"+val,{headers:this.httpHeaders} )
  }
  Det_Customer_Detail(val):Observable<any>{
    return this.http.delete(this.base_url + "Customer_Detail/"+val,{headers:this.httpHeaders} )
  }

  Upt_Customer_Detail(data,data1):Observable<any>{
    return this.http.put(this.base_url + "Customer_Detail/"+data+"/",data1,{headers:this.httpHeaders} )
  }
  

  Post_Customer_Detail(data):Observable<any>{
    return this.http.post(this.base_url+"Customer_Detail/",data ,{headers:this.httpHeaders})
  }

  Post_Order_Detail(data):Observable<any>{
    return this.http.post(this.base_url+"Order_Detail/",data ,{headers:this.httpHeaders})
  }


  Get_Individual_Detail(data):Observable<any>{
    return this.http.get(this.base_url+"Individual_Detail?"+'id='+data ,{headers:this.httpHeaders})
  }

  Post_Individual_Detail(data):Observable<any>{
    return this.http.post(this.base_url+"Individual_Detail/",data ,{headers:this.httpHeaders})
  }
//Product_Detail_View
  Get_Product_Detail():Observable<any>{
    return this.http.get(this.base_url + "Product_Detail_View/",{headers:this.httpHeaders} )
  }

  Post_Product_Detail(data):Observable<any>{
    return this.http.post(this.base_url+"Product_Detail_View/",data ,{headers:this.httpHeaders})
  }
//Feasibility_Detail_View
  Get_Feasibility_Details():Observable<any>{
    return this.http.get(this.base_url + "Feasibility_Detail_View/",{headers:this.httpHeaders})
  }

  Post_Feasibility_Details(data):Observable<any>{
    return this.http.post(this.base_url + "Feasibility_Detail_View/",data,{headers:this.httpHeaders})
  }
//Supplier_Detail
  Get_supplier_details():Observable<any>{
    return this.http.get(this.supplier_url + "Supplier_Detail/",{headers:this.httpHeaders})
  }

  post_supplier_details(data):Observable<any>{
    return this.http.post(this.supplier_url + "Supplier_Detail/",data, {headers:this.httpHeaders})
  }
//Supplier_Evaluation
  Get_supplier_evalution():Observable<any>{
    return this.http.get(this.supplier_url+ "Supplier_Evaluation/",{headers:this.httpHeaders})
  }

  post_supplier_evalution(data):Observable<any>{
    return this.http.post(this.supplier_url + "Supplier_Evaluation/",data, {headers:this.httpHeaders})
  }
}