import React from "react";
import Header from "../extra/Header";
import SmallHeader from "../extra/SmallHeader";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../extra/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  // console.log(coffees);
  return (
    <div>
      <Header></Header>
      <SmallHeader></SmallHeader>
      <div className="mt-28 text-center">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-2xl font-semibold italic">Our Popular Products</h1>
        <Link
          to="/addcoffee"
          className="btn bg-[#D2B48C] text-black hover:bg-amber-800 hover:text-white italic mt-6 mb-10"
        >
          Add Coffee
        </Link>
        <div className="md:grid md:grid-cols-2 md:gap-6">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} data={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
