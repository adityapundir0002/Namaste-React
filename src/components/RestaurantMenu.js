import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL, MENU_URL_ENDPOINT } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const resMenu = async () => {
    try {
      const data = await fetch(
        MENU_URL + `restaurantId=${resId}` + MENU_URL_ENDPOINT
      );
      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    resMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}- {" RS. "}
              {item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
