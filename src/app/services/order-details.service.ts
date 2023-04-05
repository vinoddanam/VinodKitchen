import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Butter Masala",
      foodDetails: " Fried Paneer Curry with tomato and onion paste fresh made cream",
      foodPrice: 300,
      foodImg: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg"
    },
    {
      id: 2,
      foodName: "Paneer Tikka Masala",
      foodDetails: " Grilled Paneer Curry with tomato and onion paste fresh made cream bell peppers and tandoori onion",
      foodPrice: 250,
      foodImg: "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala-1014x1536.jpg"
    },
    {
      id: 3,
      foodName: "Paneer Biryani",
      foodDetails: " fried paneer With Basmathi Rice that is flavoured in saffron and garlic bay leaves",
      foodPrice: 450,
      foodImg: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Instant-Pot-Paneer-Biryani-1014x1536.jpg"
    },
    {
      id: 4,
      foodName: "Paneer Kebab",
      foodDetails: " grilled Paneer(dry) with butter and onions red bell peppers bell peppers turmeric and a tint of rose water",
      foodPrice: 200,
      foodImg: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg"
    },
    {
      id: 5,
      foodName: "Paneer Burji",
      foodDetails: "Smashed Paneer fry, shreedded cheese tossed in oil with turmeric powder and cumin and cilantro dressing ",
      foodPrice: 150,
      foodImg: "https://shwetainthekitchen.com/wp-content/uploads/2022/05/Paneer-Bhurji.jpg"
    },
    {
      id: 6,
      foodName: "Saag Panner",
      foodDetails: " Fried Paneer Green Curry conatins spinach with tomato and onion paste fresh made cream",
      foodPrice: 300,
      foodImg: "https://dinnerthendessert.com/wp-content/uploads/2018/03/Saag-Paneer-2-1048x1572.jpg"
    }

  ]
}
