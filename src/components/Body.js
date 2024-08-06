import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import useResList from "../utils/useResList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const listOfRestaurants = useResList();
  const onlineStatus = useOnlineStatus();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleFilterClick = () => {
    const filteredList = filteredRestaurant.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setFilteredRestaurant(filteredList);
  };

  if (onlineStatus === false) {
    return (
      <>
        <h1>
          Looks like something went wrong.Please check you Internet Connection
        </h1>
      </>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="p-1 m-1">
          <input
            type="text"
            className="truncate border border-solid border-black "
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></input>
          <button
            className="bg-green-200 px-3 py-1 m-2 rounded-lg"
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
        <div p-1 m-1>
          <button
            className="bg-gray-200 px-3 py-1 m-2 rounded-lg "
            onClick={handleFilterClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
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
