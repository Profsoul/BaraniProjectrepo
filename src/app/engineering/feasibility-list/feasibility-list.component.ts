import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { feasibility } from 'src/app/models/new-order-details';
import { EngineeringServiceService } from '../engineering-service.service';

@Component({
  selector: 'app-feasibility-list',
  templateUrl: './feasibility-list.component.html',
  styleUrls: ['./feasibility-list.component.css']
})
export class FeasibilityListComponent implements OnInit {

  
  
  feasibility: feasibility[]
  details: {
    Customer_name: string;
    Part_name: string;
  }
  
  feasibilityForm: FormGroup

  isDrawing_readability: boolean = false
  isWhether_all_dimensions_given: boolean = false
  isType_of_mould: boolean = false
  isCore_type: boolean = false
  isCore_box_detail: boolean = false
  isReinforcement_in_core: boolean = false
  isUnit: boolean = false
  isChill_requirement: boolean = false
  isSleeve_kalpur_requirement: boolean = false
  isFilter_requirement: boolean = false
  isPattern_material: boolean = false
  isHeat_treatment_requirement: boolean = false
data:string;
view:boolean;
list:any;
  constructor(private formbuilder: FormBuilder, private service: EngineeringServiceService,
    private route: ActivatedRoute,
    private router: Router) {
      this.data = this.route.snapshot.params.id 
      if (this.data != "feasibility-form"){
        console.log(this.data)
      service.Filter_Product_Detail(this.data).subscribe(data=>{
        this.list = data
        console.log(this.data)
      },
      error =>{
        console.log(error)
      })
      this.view = true;
    }
    else{
      console.log(this.data)
      this.view = false
    }
      


    }


    action(){
     this.view = !this.view
    }

  ngOnInit(): void {
    this.details = {
      Customer_name:this.route.snapshot.params['Customer_name'],
      Part_name:this.route.snapshot.params['Part_name'],
    }
    this.route.params
    .subscribe(Params => {
      this.details.Customer_name = Params['Customer_name'];
      this.details.Part_name = Params['Part_name'];
    })
    this.feasibilityForm = this.formbuilder.group({
      Customer_name: [this.details.Customer_name],
      Part_name:[this.details.Part_name],
      Drawing_number: [],
      Revision_number:[],
      Feasibility_id: ['1234'],
      Drawing_readability: [],
      Dimensional_tolerance: [],
      Cast_material: [],
      Hardness_required: [],
      Resource_requirement: ['asd',],
      Whether_all_dimensions_given: [],
      Type_of_mould: [],
      No_of_cavity: [],
      Core_type: [],
      Approx_core_weight: [],
      Core_box_detail: [],
      Reinforcement_in_core: [],
      Pattern_overall_size: [],
      Minimum_wall_thickness: [],
      Casting_weight: [],
      Casting_weight_per_box: [],
      Approx_pouring_weight: [],
      Yield: [],
      Frame_requirement: [],
      Chill_requirement: [],
      Pattern_material: [],
      Filter_requirement: [],
      Fettling_requirement: [],
      Pattern_core_box_cost: [],
      Casting_surface_coating: [],
      Match_plate_cost: [],
      Surface_treatment_cost: [],
      Development_cost: [],
      PPAP: [],
      Pattern_development_time: [],
      Bulk_lot_lead_time: [],
      Rejection_level_estimation: [],
      Head_treatment_requirement: ['good',],
      Supplier_identification: ['qwre'],
      Heat_no_detail: [],
      Conclusion: [],
      Not_feasible_reason: [],
      Customer_special_requirement: [],
      BFC_constraints: [],
      Comments: [],
      Product_detail: ['asd',],
    })

      
  }
  Drawing_readability(selectedVal){
    debugger
    if(selectedVal === 'Add new'){
      this.isDrawing_readability = true
    }else{
      this.isDrawing_readability = false
    }
  }
  Whether_all_dimensions_given(selectedVal){
    if(selectedVal === 'Add new'){
      this.isWhether_all_dimensions_given = true
    }else{
      this.isWhether_all_dimensions_given = false
    }
  }
  Type_of_mould(selectedVal){
    if(selectedVal === 'Add new'){
      this.isType_of_mould = true
    }else{
      this.isType_of_mould = false
    }
  }
  Core_type(selectedVal){
    if(selectedVal === 'Add new'){
      this.isCore_type = true
    }else{
      this.isCore_type = false
    }
  }
  Sleeve_kalpur_requirement(selectedVal){
    if(selectedVal === 'Add new'){
      this.isSleeve_kalpur_requirement = true
    }else{
      this.isSleeve_kalpur_requirement = false
    }
  }
  Reinforcement_in_core(selectedVal){
    if(selectedVal === 'Add new'){
      this.isReinforcement_in_core = true
    }else{
      this.isReinforcement_in_core = false
    }
  }
  Core_box_detail(selectedVal){
    if(selectedVal === 'Add new'){
      this.isCore_box_detail = true
    }else{
      this.isCore_box_detail = false
    }
  }
  Unit(selectedVal){
    if(selectedVal === 'Add new'){
      this.isUnit = true
    }else{
      this.isUnit = false
    }
  }
  Chill_requirement(selectedVal){
    if(selectedVal === 'Add new'){
      this.isChill_requirement = true
    }else{
      this.isChill_requirement = false
    }
  }
  Filter_requirement(selectedVal){
    if(selectedVal === 'Add new'){
      this.isFilter_requirement = true
    }else{
      this.isFilter_requirement = false
    }
  }
  Pattern_material(selectedVal){
    if(selectedVal === 'Add new'){
      this.isPattern_material = true
    }else{
      this.isPattern_material = false
    }
  }
  Heat_treatment_requirement(selectedVal){
    if(selectedVal === 'Add new'){
      this.isHeat_treatment_requirement = true
    }else{
      this.isHeat_treatment_requirement = false
    }
  }

  submit(){}

}
