import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleFilterClick = () => {
    const filteredList = filteredRestaurant.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setFilteredRestaurant(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Rendering
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(inputText.toLowerCase());
              });
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>
          Filter
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((item) => (
          <Link key={item?.info?.id} to={"/restaurants/" + item?.info?.id}>
            <ResCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
