import React from "react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ data }) => {
  const {_id, photo, name, chef, category } = data;
  // console.log(data);

  const handleUpdate = (id) => {
    console.log(id);
  }

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffee/${id}`,{
          method : "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          Swal.fire(
          'Deleted!',
          'Your coffee has been deleted.',
          'success'
        )
        })
      }
    })
  }

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
          <Link to={`/updatecoffee/${_id}`} className="btn btn-black"><HiPencil className="text-2xl"></HiPencil></Link>
          <br /> <br />
          <button onClick={() => handleDelete(_id)} className="btn bg-red-800 hover:bg-red-600"><HiTrash className="text-2xl"></HiTrash></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
