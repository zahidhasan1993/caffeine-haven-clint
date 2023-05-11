import React from "react";
import img from "../../assets/more/3.png"

const Header = () => {
  return (
    <div
      className="hero h-[35rem]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md md:ml-96">
          <h1 className="mb-5 text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#D2B48C] text-black hover:bg-amber-800 hover:text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
