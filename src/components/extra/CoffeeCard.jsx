import React from "react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";

const CoffeeCard = ({ data }) => {
  const { photo, name, chef, category } = data;
  console.log(data);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-7 flex flex-row justify-between">
        <figure>
          <img src={photo} className="" />
        </figure>
        <div className="mt-10">
          <p className="mb-2">
            <span className="font-bold mr-2">Name:</span>
            {name}
          </p>
          <p className="mb-2">
            <span className="font-bold mr-2">Chef:</span>
            {chef}
          </p>
          <p className="mb-2">
            <span className="font-bold mr-2">Category:</span>
            {category}
          </p>
        </div>
        <div className="">
          <button className="btn bg-[#D2B48C] hover:bg-amber-900"><HiEye className="text-2xl"></HiEye></button>
          <br />
          <br />
          <button className="btn btn-black"><HiPencil className="text-2xl"></HiPencil></button>
          <br /> <br />
          <button className="btn bg-red-800 hover:bg-red-600"><HiTrash className="text-2xl"></HiTrash></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
