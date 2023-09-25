import { useParams } from "react-router-dom";
import { FETCH_MENU,CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        getMenu();
    },[])
    async function getMenu(){
        const data=await fetch(FETCH_MENU+resId);
        const json=await data.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info)
        console.log(json?.data?.cards[0]?.card?.card?.info);
    }
    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo;
    return(
        <div>
            <h1>{name}</h1>
            <h5>Restaurant Id : {resId}</h5>
            <img src={CDN_URL+cloudinaryImageId} alt="restaurant-image"/>
            <hr/>
            <ul>
                <li>{cuisines}</li>
            </ul>
            <h3>{costForTwoMessage}</h3>
        </div>
    )
}

export default RestaurantMenu;