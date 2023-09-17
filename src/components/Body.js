import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/constants";

const Body = () => {
    return (
      <div>
        <div className="search-bar">seacrh</div>
        <div className="restaurant-container">
          {
              restaurants.map((res)=><RestaurantCard restaurant={res} key={res.info.id}/>)
          }
        </div>
      </div>
    );
  };

  export default Body;