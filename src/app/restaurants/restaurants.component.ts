import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import {trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch',[
      state('hidden', style({
        opacity:0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity:1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *',animate('250ms 0s ease-in-out'))
    ])
  ]

})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: Array<RestaurantModel>;
  

  constructor(private restaurantService: RestaurantsService) {
    
   }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch(){
    if(this.searchBarState == 'hidden'){
      this.searchBarState = 'visible'
    }else{
      this.searchBarState = 'hidden'
    }

  }

}
