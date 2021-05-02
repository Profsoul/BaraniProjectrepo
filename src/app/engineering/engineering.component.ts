import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EngineeringServiceService } from './engineering-service.service';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {

  feasibilityForm : FormGroup;
  list :any;
  isDrawing_Readability: boolean;
  newOrderData: any =[];
  
  constructor(private formBuilder: FormBuilder, private router: Router, private service: EngineeringServiceService) { 
    service.Get_Order_Detail().subscribe(data =>{

      this.list = data
    },
    error =>{
      console.log(error)
    })

  }

  ngOnInit(): void {
    this.feasibilityForm = this.formBuilder.group({
      Customer_name : [],
      Part_name : [],
      Drawing_number : [],
      Revision_number : [],
      Drawing_readability : [],
      Dimensional_tolerance : [],
      Casting_material : [],
      Annual_volume : [],
      Whether_all_dimensions_given : [],
      Hardness_required : [],
      Type_of_mould : [],
      No_of_cavity : [],
      Core_type : [],
      Approx_core_weight : [],
      Core_box_detail : [],
      Reinforcement_in_core : [],
      Pattern_overall_size : [],
      Minimum_wall_thickness : [], 
      Casting_weight : [],
      Casting_weight_per_box : [],
      Approx_pouring_weight : [],
      Unit : [],
      Yield : [],
      Frame_requirement : [],
      Chill_requirement : [],
      Sleeve_kalpur_requirement : [],
      Filter_requirement : [],
      Pattern_material : [],
      Fettling_requirement : [],
      Pattern_core_box_cost : [],
      casting_surface_coating : [],
      Match_plate_cost : [],
      Surface_treatment_cost : [],     
      Development_cost : [],
      PPAP : [],
      Pattern_development_time : [],
      Bulk_lot_lead_time : [],
      Rejection_level_estimation : [],
      Head_treatment_requirement : [],
      Supplier_identification : [],
      Heat_no_detail : [],
      Delivery_type : [],
      Conclusion : [],
      Not_feasible_reason : [],
      BFC_constraints : [],
      Comments  : [],
      Customer_special_requirement : [],

    })
    this.newOrderData.push(JSON.parse(localStorage.getItem('orderData')))
    this.newOrderData.filter(res => {
      this.newOrderData = res
    })
  }
edit(){
  this.router.navigateByUrl('/feasibility');
}
 

}
