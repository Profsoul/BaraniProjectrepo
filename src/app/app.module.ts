import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlanningComponent } from './planning/planning.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ProductionComponent } from './production/production.component';
import {MatDialogModule} from '@angular/material/dialog';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './dashboard/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewOrderComponent } from './marketing/new-order/new-order.component';
import { ExistingOrderComponent } from './marketing/existing-order/existing-order.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './marketing/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderServiceService } from './service/order-service.service';
import { SupplierComponent } from './purchase/supplier/supplier.component';
import { FeasibilityListComponent } from './engineering/feasibility-list/feasibility-list.component';
import { HomeModuleComponent } from './dashboard/home-module/home-module.component';
import { LoginComponent } from './login/login.component';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { SupplierHomeComponent } from './purchase/supplier-home/supplier-home.component';
import { StockAddComponent } from './stock/stock-add/stock-add.component';
import { StockTakeComponent } from './stock/stock-take/stock-take.component';
import { CustomerComponent } from './marketing/customer/customer.component';
import { AddCustomerComponent } from './marketing/customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './marketing/customer/view-customer/view-customer.component';
import { HrComponent } from './hr/hr.component';
import { AttendanceComponent } from './hr/attendance/attendance.component';
import { EmployeeComponent } from './hr/employee/employee.component';
import { EmployeeDetailsComponent } from './hr/employee/employee-details/employee-details.component';





@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    PurchaseComponent,
    StockComponent,
    MarketingComponent,
    ProductionComponent,
    IndexComponent,
    DashboardComponent,
    NewOrderComponent,
    ExistingOrderComponent,
    EngineeringComponent,
    OrderListComponent,
    SupplierComponent,
    FeasibilityListComponent,
    HomeModuleComponent,
    LoginComponent,
    PurchaseListComponent,
    SupplierHomeComponent,
    StockAddComponent,
    StockTakeComponent,
    CustomerComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    HrComponent,
    AttendanceComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
    
  ],
  providers: [ 
    OrderServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
