import React from "react";
import { Link } from "react-router-dom";

const Bookings = () => {
  return (
    <div>
      <nav className="w-full flex mt-8">
        <Link className="py-1 px-3 " to={"/account"}>
          My Profile
        </Link>

        <Link
          className="py-1 px-3  bg-primary rounded-full text-white"
          to={"/account/bookings"}
        >
          My Bookings
        </Link>

        <Link className="py-1 px-3" to={"/account/places"}>
          My Accommodation
        </Link>
      </nav>
      <div className="flex items-center justify-end">
        <button className=" py-1 px-3 my-4 bg-primary rounded-full text-white">
          + Add Bookings
        </button>
      </div>
    </div>
  );
};

export default Bookings;
