import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");
  return (
    <div>
      <nav className="w-full flex mt-8">
        <Link
          className="py-1 px-3 bg-primary rounded-full text-white"
          to={"/account"}
        >
          My Profile
        </Link>

        <Link className="py-1 px-3" to={"/account/bookings"}>
          My Bookings
        </Link>

        <Link className="py-1 px-3" to={"/account/places"}>
          My Accommodation
        </Link>
      </nav>
      <div className="flex items-center justify-end">
        <button className=" py-1 px-3 my-4 bg-primary rounded-full text-white">
          Edit Profile ..
        </button>
      </div>
      <form>
        <div>
          <h2 className="text-4xl mb-4">Profile picture</h2>
          <p className="text-gray-500 text-sm">upload a picture of you</p>
          <div>
            <div className="mt-2 ">
              <input type="file" className="  py-3 px-3 text-xl  " />
            </div>
          </div>
          <h2 className="text-4xl mb-4">Name</h2>
          <p className="text-gray-500 text-sm">enter your full name</p>
          <input
            type="text"
            placeholder="john walker.."
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <h2 className="text-4xl mb-4">Address</h2>
          <p className="text-gray-500 text-sm">Full Address of your place.</p>
          <input
            type="text"
            placeholder="no 9, alabama streets"
            value={Address}
            onChange={(ev) => setAddress(ev.target.value)}
          />

          <div>
            <h2 className="text-4xl mb-4 mt-4">Description</h2>
            <p className="text-gray-500 text-sm">
              Please add a description about this place.
            </p>
            <textarea
              placeholder="description about this place"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
          <div>
            <h2 className="text-2xl mb-4 mt-4">Select Your Intrests</h2>
            <p className="text-gray-500 text-sm">
              Select all the Perks of your place
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <label className="flex gap-2 ">
                <input type="checkbox" />

                <span>Smooking</span>
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />

                <span>Drinking</span>
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />

                <span>Music</span>
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />

                <span>Gym</span>
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />

                <span>Married</span>
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-4xl mb-4 mt-4">Extra info</h2>
            <p className="text-gray-500 text-sm">anything we should know ?</p>
            <textarea
              placeholder="type all of your intrests"
              value={info}
              onChange={(ev) => setInfo(ev.target.value)}
            />
          </div>

          <button className=" mt-2 primary text-white shadow shadow-gray-500">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
