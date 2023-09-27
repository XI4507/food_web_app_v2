import { useEffect, useState } from "react";
import { FETCH_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
 const [resInfo,setResInfo]=useState(null)
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(FETCH_MENU + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    console.log(json?.data?.cards[0]?.card?.card?.info);
  }
  return resInfo;
};

export default useRestaurantMenu;
