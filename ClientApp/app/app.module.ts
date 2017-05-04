import { FormsModule } from '@angular/forms';
import * as Raven from 'raven-js';
import { NgModule, ErrorHandler  } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ToastyModule} from 'ng2-toasty';
import { UniversalModule } from 'angular2-universal';


import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { VehicleService } from './services/vehicle.service';

import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { AppErrorHandler } from './app.error-handler';

Raven.config('https://e0c90e459a5d4f46b81e93a141e0a910@sentry.io/164633').install();
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        VehicleFormComponent
    ],
    imports: [
        FormsModule,
        ToastyModule.forRoot(),
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'vehicles/new', component: VehicleFormComponent },
            { path: 'vehicles/:id', component: VehicleFormComponent },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        {provide:ErrorHandler,useClass:AppErrorHandler},
        VehicleService
    ]
})
export class AppModule {
}
