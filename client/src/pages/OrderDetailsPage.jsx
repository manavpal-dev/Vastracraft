import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../redux/slices/orderSlice";

const OrderDetailsPage = () => {
  const { id } = useParams(); // useParams hook
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>

      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="bg-white border rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
          {/* Order Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold break-all">
                Order Id: #{orderDetails._id}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>

              <span
                className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="text-sm">
                Payment Method: {orderDetails.paymentMethod}
              </p>
              <p className="text-sm">
                Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="text-sm">
                Shipping Method: {orderDetails.shippingMethod}
              </p>
              <p className="text-sm break-words">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="overflow-x-auto rounded-lg border">
            <h4 className="text-lg font-semibold p-4">Products</h4>
            <table className="min-w-full text-sm md:text-base">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Unit Price</th>
                  <th className="py-3 px-4 text-left">Quantity</th>
                  <th className="py-3 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item, index) => (
                  <tr key={`${item.productId}-${index}`} className="border-t">
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td className="py-3 px-4">${item.price}</td>
                    <td className="py-3 px-4">{item.quantity}</td>
                    <td className="py-3 px-4 font-medium">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back Link */}
          <Link
            to="/my-orders"
            className="inline-block mt-6 text-blue-600 hover:underline"
          >
            Back to My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
