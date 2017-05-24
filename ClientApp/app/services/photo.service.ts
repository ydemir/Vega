import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class PhotoService {
    do: any;
    constructor(private http: Http) {
    }


    upload(vehicleId, photo) {
        var formData = new FormData();
        formData.append('file', photo);
        return this.http.post(`/api/vehicles/${vehicleId}/photos`, formData)
            .map(res => res.json());
    }

    getPhotos(vehicleId) {
        return this.http.get(`/api/vehicles/${vehicleId}/photos`)
            .map(res => res.json());


    }

}