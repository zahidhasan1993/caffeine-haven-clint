import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,chef,supplier,taste,category,details,photo}
        
        console.log(newCoffee);

        //add to db and connect to server

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully added a new coffee',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
        
    }


  return (
    <>
    <Link to="/"><button className="italic mt-14 hover:text-amber-800 flex items-center"><FaArrowLeft className="mr-2"></FaArrowLeft> Back To Home</button></Link>
      <div className="bg-[#F4F3F0] mt-14 text-center">
        <h1 className="pt-11 text-5xl text-[#374151] font-semibold italic">Add New Coffee</h1>
        <p className="md:px-48 my-8 text-[#1B1A1A] text-opacity-50">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <div className="mx-28">
          <form onSubmit={handleAddCoffee}>
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
            <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C] text-black hover:bg-amber-800 hover:text-white md:col-span-2"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
