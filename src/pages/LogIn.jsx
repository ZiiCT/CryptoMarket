import React, { useState } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-2xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400"></AiOutlineMail>
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-2xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400"></AiFillLock>
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Log in
          </button>
        </form>
        <p className="my-4">
          Dont have an account ?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
