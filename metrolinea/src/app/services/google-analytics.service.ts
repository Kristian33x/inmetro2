import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

declare let gtag: Function;

export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = 'rutas',
    eventValue: number = 1 ) {
         gtag('event', eventName, {
          eventCategory,
          eventLabel,
          eventAction,
          eventValue
        });
    }
}
