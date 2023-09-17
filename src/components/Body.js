import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/constants";
import { useState } from "react";

const Body = () => {
    const [allRestaurant,setAllRestaurant]=useState(restaurants);
    const [restaurant,setRestaurant]=useState(restaurants)
    function handleTopRated(){
        const filterRestaurant=allRestaurant.filter((res)=>res.info.avgRating>4.1);
        setRestaurant(filterRestaurant)
    }
    return (
      <div>
        <div className="filter-buttons">
            <button className="btn" onClick={()=>handleTopRated()}>Top Rated</button>
            <button className="btn" onClick={()=>setRestaurant(allRestaurant)}>All Restaurant</button>
        </div>
        <div className="restaurant-container">
          {
              restaurant.map((res)=><RestaurantCard restaurant={res} key={res.info.id}/>)
          }
        </div>
      </div>
    );
  };

  export default Body;