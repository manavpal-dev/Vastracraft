import React, { useEffect } from "react";
import MyOrdersPage from "./MyOrdersPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlics";
import { clearCart } from "../redux/slices/cartSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
  <div className="min-h-screen border-2">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/4 shadow-md rounded-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {user?.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4 break-words">
            {user?.email}
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 w-full sm:w-auto"
          >
            Logout
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4">
          <MyOrdersPage />
        </div>

      </div>
    </div>
  </div>
);

};

export default Profile;
