import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import * as Rx from "rxjs";
import "rxjs/Rx";

@Injectable()
export class HttpServiceService {
  loggedIn = new Rx.BehaviorSubject(localStorage.getItem('login')?true:false);
  constructor() { }

      isLoggedFn():Observable<any>{
      return this.loggedIn;
      }  

}