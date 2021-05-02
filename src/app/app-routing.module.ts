import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { MarketingComponent } from './marketing/marketing.component'
import { PlanningComponent } from './planning/planning.component';
import { ProductionComponent } from './production/production.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
import { NewOrderComponent } from './marketing/new-order/new-order.component';
import { ExistingOrderComponent } from './marketing/existing-order/existing-order.component';
import { OrderListComponent } from './marketing/order-list/order-list.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { SupplierComponent } from './purchase/supplier/supplier.component';
import { FeasibilityListComponent } from './engineering/feasibility-list/feasibility-list.component';
import { LoginComponent } from './login/login.component';
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


const routes: Routes = [
  
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:IndexComponent
  },
  {
    path:'Marketing',
    component:MarketingComponent,
  },
  
  {
    path:'Marketing/Customer',
    component:CustomerComponent
  },

  {
    path:'Customer/Adding-Customer',
    component:AddCustomerComponent},
  
  {
    path:'Customer/View-Customer/:id',
    component:ViewCustomerComponent
  },
  
  {
    path:'Marketing/New-order/:id',
    component:NewOrderComponent
  },
  {
    path:'Marketing/Existing-order',
    component:ExistingOrderComponent
  },
  {
    path:'Marketing/order-list',
    component:OrderListComponent
  },
  {
    path:'Planning',
    component:PlanningComponent
  },
  {
    path:'Production',
    component:ProductionComponent
  },
  {
    path:'Purchase',
    component:PurchaseComponent
  },
  {
    path:'supplier',
    component: SupplierHomeComponent
  },
  {
    path:'supplier/add-supplier',
    component:SupplierComponent

  },
  {
    path:'HR',
    component:HrComponent
  },
  {
    path:'HR/attendance',
    component:AttendanceComponent
  },
  {
    path:'HR/employee',
    component:EmployeeComponent
  },
  {
    path: 'HR/employee/employee-details',
    component:EmployeeDetailsComponent
  },
  {
    path:'Stock',
    component:StockComponent
  },

  {
    path:'Stock/inward',
    component:StockAddComponent
  },

    {path:'Stock/outward',
    component:StockTakeComponent},
  {
    path:'Engineering',
    component:EngineeringComponent
  },
  {
    path:'Engineering/:Customer_name/:Part_name',
    component: FeasibilityListComponent
  },
  {
    path:'feasibility/:id',
    component: FeasibilityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
