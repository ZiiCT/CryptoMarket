import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogOut}
              className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Log out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Watchlist</h1>
            <SavedCoin></SavedCoin>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default Account;
