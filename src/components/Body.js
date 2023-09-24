import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allRestaurant,setAllRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("")
    const [restaurant,setRestaurant]=useState([]);
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
            setAllRestaurant(resData);
            setRestaurant(resData)
            console.log(allRestaurant);
          }
        }
    }
    function searchHandler(searchText){
      const data=allRestaurant.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setRestaurant(data)
    }
    
    function handleTopRated(){
        const filterRestaurant=allRestaurant.filter((res)=>res.info.avgRating>4.1);
        setRestaurant(filterRestaurant)
    }
    if(restaurant.length===0){
      return <Shimmer/>
    }
    return (
      <div>
        <div className="filter-buttons">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="btn" onClick={()=>searchHandler(searchText)}>Search</button>
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