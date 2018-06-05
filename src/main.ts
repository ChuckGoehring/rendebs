import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { Observable } from "rxjs";

const debuggerOn = true;  // flag new debug capability

if (environment.production) {
  enableProdMode();
}



// flag new debug capability START
Observable.prototype.debug = function(message: string) {

  return this.do(
    nextValue => {
      if (debuggerOn) {
        console.log(message, nextValue);
      }
    },
    error => {
      if (debuggerOn) {
        console.error(message, error);
      }
    },
    () => {
      if (debuggerOn) {
        console.log("Observable completed - ", message);
      }
    }

  );
};

declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>
  }
} 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
