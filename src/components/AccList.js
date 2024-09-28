import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

const AccList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const handleRemItem = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item) => (
        <div
          data-testid="accList"
          className="p-4 border-b border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
          key={item?.card?.info?.id}
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item?.card?.info?.name}</h3>
            <span className="text-sm text-gray-500">
              - ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="mt-2 text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="relative inline-block">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="flex rounded-lg my-0 p-1 mx-4 mb-4 bg-gray-500 text-white">
              <button
                className="rounded-lg mr-1 "
                onClick={() => handleRemItem(item)}
              >
                -
              </button>
              <span> Add </span>
              <button
                data-testid="plusBtn"
                className="rounded-lg ml-1 "
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccList;
