import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WebcommService {

  constructor(private http: Http) { }

  //--------------------------------------------------------------------------------------------------------------------
  // public methods
  //--------------------------------------------------------------------------------------------------------------------
  // load the holiday data
  loadHolidayAPIData(endPoint: string) {
    return this.http.get(endPoint)
      .map((response) => response.json())
      .catch(err => {
        return Observable.throw(err);
      });
  }
}
