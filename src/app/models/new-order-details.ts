export interface customerDetails {
    Customer_id : string;
    Email_id : string;
    Customer_name : string;
    Nick_name : string;
    Address : string;
    GST_no : string;
    CIN_no : string;
}

export interface orderDetails {
    RFQ_id: string;
    Date: string;
    Time: string;
    Customer_detail: string;
}

export interface Individual_Detail {
    Customer_id : string;
    Individual_details : any;
}

export interface productDetails {
        Product_id: string;
        Ventor_code: string;
        Part_code: string;
        Part_name: string;
        Casting_type: string;
        Pattern_scope: string;
        Transport: string;
        Painting_method: string;
        Packing_type: string;
        Machinary_type: string;
        Payment_terms: string;
        Export_required: string;
        Payments_terms_days: string;
        Quantity: string;
        Date: string;
        Time: string;
        Is_feasiable: boolean;
        RFQ_detail: string;

} 

export interface supplierDetails {
    Supplier_id: string;
    Supplier_name: string;
    Address: string;
    Contact: string;
    Email_id: string;
    Nature_of_business: string;
    GST_no: string;
    Distributor: string;
    List_of_item: string;
    Details: string;
    Details_file: string    ;
    Facilities: string;
    Facilities_file: string;
    Information: string;
    Prepared_by: boolean;
    Approved_by: boolean;
}

export interface supplierEvalution {
    id: number;
    Items: string;
    Period: string;
    Consistent_quality: number;
    Technical_capability: number;
    Experience: number;
    Credit_terms: number;
    Capability_to_meet: number;
    Quality: number;
    Total: number;
    Meeting_schedule: number;
    Conclusion: string;
    Assessed_by: boolean;
    Approved_by: boolean;
    Date: string;
    Time: string;
    Supplier_detail: string;
}

/*export class Supplier {
    //number_of_lot_supplied : any;
}*/

export interface NewOrderDetails {
    Customer_id : string;
    Email_id : string;
    Customer_name : string;
    Nick_name : string;
    Address : string;
    GST_no : string;
    CIN_no : string;
}

export interface Individual_Detail {
    Customer_id : string;
    Individual_details : any;
}

export interface productDetails {
    product_id : string;
    Product_name : string;
    Casting_Type : string;
    Machinary : string;
    vendor_name : string;
    pattern_Scope : string;
    painting : string;
    packing : string;
    Transport : string;
    payment : string;
    Payment_terms_days : string;
    export : string;
    Quantity : string;

} 

export interface supplierDetails {
    Supplier_id: string;
    Supplier_name: string;
    Address: string;
    Contact: string;
    Email_id: string;
    Nature_of_business: string;
    GST_no: string;
    Distributor: string;
    List_of_item: string;
    Details: string;
    Details_file: string    ;
    Facilities: string;
    Facilities_file: string;
    Information: string;
    Prepared_by: boolean;
    Approved_by: boolean;
}

export interface supplierEvalution {
    id: number;
    Items: string;
    Period: string;
    Consistent_quality: number;
    Technical_capability: number;
    Experience: number;
    Credit_terms: number;
    Capability_to_meet: number;
    Quality: number;
    Total: number;
    Meeting_schedule: number;
    Conclusion: string;
    Assessed_by: boolean;
    Approved_by: boolean;
    Date: string;
    Time: string;
    Supplier_detail: string;
}

export interface feasibility {
    Feasibility_id: string;
    Drawing_readability: string;
    Dimensional_tolerance: string;
    Cast_material: string;
    Hardness_required: string;
    Resource_requirement: string;
    Whether_all_dimensions_given: string;
    Type_of_mould: string;
    No_of_cavity: number;
    Core_type: string;
    Approx_core_weight: number;
    Core_box_detail: string;
    Reinforcement_in_core: string;
    Pattern_overall_size: string;
    Minimum_wall_thickness: string;
    Casting_weight: number;
    Casting_weight_per_box: number;
    Approx_pouring_weight: string;
    Yield: number;
    Frame_requirement: string;
    Chill_requirement: string;
    Pattern_material: string;
    Filter_requirement: string;
    Fettling_requirement: string;
    Pattern_core_box_cost: string;
    Casting_surface_coating: string;
    Match_plate_cost: string;
    Surface_treatment_cost: string;
    Development_cost: string;
    PPAP: string;
    Pattern_development_time: string;
    Bulk_lot_lead_time: string;
    Rejection_level_estimation: string;
    Head_treatment_requirement: string;
    Supplier_identification: string;
    Heat_no_detail: string;
    Conclusion: string;
    Not_feasible_reason: string;
    Customer_special_requirement: string;
    BFC_constraints: string;
    Comments: string;
    Date: string;
    Time: string;
    Product_detail: string;
}
