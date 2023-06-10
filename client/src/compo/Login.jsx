import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="text" placeholder="your@email.com" />
          <input type="password" placeholder="Password" />
          <button className="primary ">Login</button>
          <div className="mt-2 text-center text-gray-500">
            Don't Have an account yet?
            <Link className="ml-1 underline text-black" to={"/register"}>
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
