import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [allRestaurant,setAllRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [restaurant,setRestaurant]=useState([]);
    const onlineStatus=useOnlineStatus();
  
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
      if(data.length==0){
        return <h1>No Restaurant Found ...</h1>
      }
      setRestaurant(data)
    }
    
    function handleTopRated(){
        const filterRestaurant=allRestaurant.filter((res)=>res.info.avgRating>4.1);
        setRestaurant(filterRestaurant)
    }
    if(restaurant.length===0){
      return <Shimmer/>
    }
    return onlineStatus? (
      <div>
        <div className="filter-buttons">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="btn" onClick={()=>searchHandler(searchText)}>Search</button>
            <button className="btn" onClick={()=>handleTopRated()}>Top Rated</button>
            <button className="btn" onClick={()=>setRestaurant(allRestaurant)}>All Restaurant</button>
        </div>
        <div className="restaurant-container">
          {
              restaurant.map((res)=><Link key={res.info.id} to={"/restaurantmenu/"+res.info.id} className="link "><RestaurantCard restaurant={res}/></Link>)
          }
        </div>
      </div>
    ):<h1>It Seems Your Internet is Not Working...</h1>
  };

  export default Body;