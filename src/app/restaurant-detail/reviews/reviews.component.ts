import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

   reviews: Observable<any>;
    
  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.reviews = this.restaurantService.getReviewsOfRestaurant(id);

  }

}
