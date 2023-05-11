import React from "react";

const AddCoffee = () => {
  return (
    <div className="bg-[#F4F3F0] mt-32 text-center">
      <h1 className="pt-11 text-5xl text-[#374151] italic">Add New Coffee</h1>
      <p className="px-48 my-8 text-[#1B1A1A] text-opacity-50">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <div className="mx-28">
        <form className="md:grid md:grid-cols-2 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              name="coffee-name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Chef Name"
              name="chef-name"
              className="input input-bordered w-full"
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
            />
          </div>
          <button className="btn bg-[#D2B48C] text-black hover:bg-amber-800 md:col-span-2">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
