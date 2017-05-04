﻿import { ErrorHandler, Inject, NgZone,isDevMode } from '@angular/core';
import * as Raven from 'raven-js';
import {ToastyService} from 'ng2-toasty';
export class AppErrorHandler implements ErrorHandler {

    constructor(
        private ngZone:NgZone, 
        @Inject(ToastyService) private toastyService: ToastyService) {
        
    }

    handleError(error): void {
        if (!isDevMode) {
            Raven.captureException(error.originalError || error);
        } else {
                  throw error;
        }
      
        this.ngZone.run(() => {
            this.toastyService.error({
                title: 'Error',
                msg: 'An unexpected error happened.',
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
            });
        });

    }
}