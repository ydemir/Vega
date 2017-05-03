import { Injectable } from '@angular/core';
import { Http } from '@angular/http';    
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {

    constructor(private http: Http) { }

    getMakes() {
        return this.http.get('/api/makes')
            .map(res => res.json());
    }
    getFeatures() {
        return this.http.get('/api/features')
            .map(res => res.json());
    }

    create(vehicle) {
        return this.http.post('/api/vehicles', vehicle)
            .map(res => res.json());
    }

}
