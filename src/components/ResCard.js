import React from "react";
import { CDN_URL } from "../utils/constants";
const ResCard = ({ resData }) => {
  const { name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-cards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${resData?.info?.cloudinaryImageId || ""}`}
      />

      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h4>{avgRating}</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};
export default ResCard;
