export class RestaurantModel {
    
    id: string ;
    name: string ;
    category: string ;
    deliveryEstimate: string ;
    rating: number ;
    imagePath: string ;

    constructor(id?: string, name?: string, category?: string, deliveryEstimate?: string, 
        rating?: number, imagePath?: string){
            this.id = id;
            this.name = name;
            this.category = category;
            this.deliveryEstimate = deliveryEstimate;
            this.rating = rating;
            this.imagePath = imagePath;

    }

}