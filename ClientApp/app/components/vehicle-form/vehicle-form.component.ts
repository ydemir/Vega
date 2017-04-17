import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
    selector: 'app-vehicle-form',
    templateUrl: './vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
    makes: any[];
    features: any[];
    models: any[];
    vehicle: any = {};

    constructor(
        private vehicleService: VehicleService) { }
  
    ngOnInit() {
        this.vehicleService.getMakes().subscribe(makes =>
            this.makes = makes);

        this.vehicleService.getFeatures().subscribe(features =>
            this.features = features);

      
       

    }
    onMakeChange() {
        var selectedMake = this.makes.find(m => m.id == this.vehicle.make)
        this.models = selectedMake ? selectedMake.models : [];
    }
}
