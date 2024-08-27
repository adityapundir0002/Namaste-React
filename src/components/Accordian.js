import { useState } from "react";
import AccList from "./AccList";
const Accordian = ({ data, showAccList, setShowIndex }) => {
  const handleShow = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12  bg-gray-50 mx-auto my-6 shadow-md justify-between">
        <div
          className="flex justify-between p-1 m-1 cursor-pointer"
          onClick={handleShow}
        >
          <span className="text-lg font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {showAccList ? <span>⬇️</span> : <span>⬆️</span>}
        </div>
        {showAccList && (
          <div className="flex mt-4">
            <AccList items={data?.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Accordian;
