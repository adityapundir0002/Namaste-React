import React from "react";
import { CDN_URL } from "../utils/constants";
const ResCard = ({ resData }) => {
  const { name, cuisines, avgRating } = resData?.info;
  return (
    <div className="p-1 m-2 w-[235] h-[400] rounded-lg  bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-[225] h-[200]"
        alt="res-logo"
        src={`${CDN_URL}${resData?.info?.cloudinaryImageId || ""}`}
      />

      <h3 className="text-lg font-bold py-2">{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h4>{avgRating}</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};
export default ResCard;
