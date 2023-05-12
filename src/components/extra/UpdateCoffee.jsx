import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  // console.log(coffee);
  const { _id, details, photo, supplier, name, taste, chef, category } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(newCoffee);
    fetch(`http://localhost:5000/updatecoffee/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoffee)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your update has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
      });
  };

  return (
    <>
      <Link to="/">
        <button className="italic mt-14 hover:text-amber-800 flex items-center">
          <FaArrowLeft className="mr-2"></FaArrowLeft> Back To Home
        </button>
      </Link>
      <div className="bg-[#F4F3F0] mt-14 text-center">
        <h1 className="pt-11 text-5xl text-[#374151] font-semibold italic">
          Update Coffee {name}
        </h1>
        <div className="mx-28">
          <form onSubmit={handleUpdateCoffee}>
            <div className="md:grid md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Chef Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Chef Name"
                  name="chef"
                  className="input input-bordered w-full"
                  defaultValue={chef}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee Supplier"
                  name="supplier"
                  className="input input-bordered w-full"
                  defaultValue={supplier}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee Taste"
                  name="taste"
                  className="input input-bordered w-full"
                  defaultValue={taste}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee Category"
                  name="category"
                  className="input input-bordered w-full"
                  defaultValue={category}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee Details"
                  name="details"
                  className="input input-bordered w-full"
                  defaultValue={details}
                />
              </div>
              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee PhotoUrl"
                  name="photo"
                  className="input input-bordered w-full"
                  defaultValue={photo}
                />
              </div>
              <input
                type="submit"
                value="Add Coffee"
                className="btn bg-[#D2B48C] text-black hover:bg-amber-800 hover:text-white md:col-span-2"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;
