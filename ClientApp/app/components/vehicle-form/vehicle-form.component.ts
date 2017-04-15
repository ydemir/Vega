import { Component, OnInit } from '@angular/core';
import { MakeService } from '../../services/make.service';
import { FeatureService } from '../../services/feature.service';

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
        private makeService: MakeService,
        private featureService: FeatureService) { }
  
    ngOnInit() {
        this.makeService.getMakes().subscribe(makes =>
            this.makes = makes);

        this.featureService.getFeatures().subscribe(features =>
            this.features = features);

      
       

    }
    onMakeChange() {
        var selectedMake = this.makes.find(m => m.id == this.vehicle.make)
        this.models = selectedMake ? selectedMake.models : [];
    }
}
