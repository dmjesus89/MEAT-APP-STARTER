import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: RestaurantModel;

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id  = this.route.snapshot.params['id'];
    this.restaurantService.getRestaurantById(id).
    subscribe(resposta => this.restaurant = resposta);
    
  }

}
