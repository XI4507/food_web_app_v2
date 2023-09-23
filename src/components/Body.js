import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/constants";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
    const [allRestaurant,setAllRestaurant]=useState(restaurants);
    const [restaurant,setRestaurant]=useState(restaurants)
    useEffect(()=>{
       fetchData()
    },[])

    async function fetchData  (){
        const data=await fetch(SWIGGY_API)
        const json=await data.json();
        const arrayOfCards=json.data.cards;
        const restaurant_list="restaurant_grid_listing";
        for (const cardObj of arrayOfCards) {
          if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
            const resData =
            cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(resData);
            setAllRestaurant(resData);
            setRestaurant(resData)
          }
        }
    }
    
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