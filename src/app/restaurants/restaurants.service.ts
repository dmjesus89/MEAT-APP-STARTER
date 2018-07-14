import { Injectable } from '@angular/core';
import { RestaurantModel } from './restaurant/restaurant.model';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MEAT_API} from '../api.api';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {


   }


  getRestaurants(): Observable<Array<RestaurantModel>> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  getRestaurantById(id: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  getReviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

}
