import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({restaurant}) => {
    const {name,cuisines,cloudinaryImageId,avgRating}=restaurant.info;
    return (
      <div className="restaurant-card">
        <img src={CDN_URL+cloudinaryImageId} alt="res-card" />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} ⭐</p>
      </div>
    );
  };

  export default RestaurantCard;