import React, { useState, useEffect } from "react";
import { MENU_URL, MENU_URL_ENDPOINT } from "./constants";

const useRestaurantMenu = (resId) => {
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
  return resInfo;
};

export default useRestaurantMenu;
