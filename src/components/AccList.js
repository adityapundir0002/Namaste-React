import React from "react";
import { CDN_URL } from "../utils/constants";

const AccList = ({ items }) => {

  return (
    <div className="w-full space-y-4">
      {items.map((item) => (
        <div
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
            <div className="absolute my-0 mx-6 mb-4">
              <button className="rounded-lg bg-white ">
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccList;
