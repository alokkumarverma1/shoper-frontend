
import React from "react";
import Navbar from "../reusable-pages/Navbar";
import {
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaArrowLeft,
  FaPhoneAlt,
  FaShippingFast
} from "react-icons/fa";

function TrackOrders() {

  const trackingSteps = [
    {
      title: "Order Confirmed",
      description: "Your order has been successfully placed.",
      date: "Oct 28, 2026",
      time: "10:30 AM",
      icon: <FaCheckCircle />,
      completed: true
    },
    {
      title: "Order Processed",
      description: "Your order has been packed and is ready to ship.",
      date: "Oct 29, 2026",
      time: "02:15 PM",
      icon: <FaBox />,
      completed: true
    },
    {
      title: "Shipped",
      description: "Your package is on its way to the destination.",
      date: "Oct 30, 2026",
      time: "09:45 AM",
      icon: <FaShippingFast />,
      completed: true
    },
    {
      title: "Out for Delivery",
      description: "Your package is on the way to your address.",
      date: "Expected today",
      time: "Pending",
      icon: <FaTruck />,
      completed: false
    },
    {
      title: "Delivered",
      description: "Your package will be delivered successfully.",
      date: "Pending",
      time: "Pending",
      icon: <FaCheckCircle />,
      completed: false
    }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#faf9ff] px-4 py-8 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="mb-2 text-sm font-medium text-purple-600">
                MY ACCOUNT / TRACK ORDER
              </p>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Track Your Order
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Follow your package from our store to your doorstep.
              </p>
            </div>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-purple-300 hover:text-purple-600"
            >
              <FaArrowLeft />
              Back to Orders
            </button>

          </div>

          {/* Delivery Status */}
          <div className="mb-7 overflow-hidden rounded-3xl bg-linear-to-r from-purple-700 via-purple-600 to-indigo-600 p-6 text-white shadow-lg shadow-purple-100 sm:p-8">

            <div className="flex flex-wrap items-center justify-between gap-6">

              <div>
                <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold">
                  ORDER IN TRANSIT
                </span>

                <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                  Your order is on its way!
                </h2>

                <p className="mt-2 text-sm text-purple-100">
                  Great news! Your package is moving towards your location.
                </p>

                <div className="mt-6">
                  <p className="text-xs text-purple-200">
                    EXPECTED DELIVERY
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">
                    November 02, 2026
                  </h3>
                </div>
              </div>

              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/15 text-6xl">
                <FaTruck />
              </div>

            </div>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-xs font-medium">
                <span>Shipping Progress</span>
                <span>60%</span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[60%] rounded-full bg-white" />
              </div>
            </div>

          </div>

          {/* Order and Tracking Information */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">

            {/* Tracking Timeline */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">

              <div className="mb-8 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Shipment Updates
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Track every step of your delivery.
                  </p>
                </div>

                <span className="rounded-full bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-700">
                  Live Tracking
                </span>
              </div>

              <div className="space-y-0">

                {trackingSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-4 pb-9 last:pb-0">

                    {index !== trackingSteps.length - 1 && (
                      <div
                        className={`absolute left-[17px] top-9 h-full w-0.5 ${
                          trackingSteps[index + 1].completed
                            ? "bg-purple-500"
                            : "bg-gray-200"
                        }`}
                      />
                    )}

                    <div
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm ${
                        step.completed
                          ? "bg-purple-600 text-white"
                          : "border-2 border-gray-200 bg-white text-gray-400"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div className="flex flex-1 flex-wrap justify-between gap-2">

                      <div>
                        <h3 className={`font-semibold ${
                          step.completed ? "text-gray-900" : "text-gray-400"
                        }`}>
                          {step.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {step.description}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-xs font-semibold text-gray-700">
                          {step.date}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {step.time}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* Order Information */}
            <div className="space-y-6">

              {/* Order Details */}
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

                <h2 className="mb-5 text-lg font-bold text-gray-900">
                  Order Details
                </h2>

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">Order ID</span>
                    <span className="font-semibold text-gray-900">
                      #SHR-20261028
                    </span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">Order Date</span>
                    <span className="font-semibold text-gray-900">
                      Oct 28, 2026
                    </span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">Payment</span>
                    <span className="font-semibold text-green-600">
                      Paid
                    </span>
                  </div>

                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">Total Amount</span>
                    <span className="font-bold text-gray-900">
                      ₹2,499
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="mb-2 text-gray-500">Tracking Number</p>
                    <div className="flex items-center justify-between gap-2 rounded-xl bg-purple-50 p-3">
                      <span className="text-xs font-bold text-purple-700">
                        TRK928374651
                      </span>
                      <button
                        onClick={() => navigator.clipboard.writeText("TRK928374651")}
                        className="text-xs font-semibold text-purple-600 hover:text-purple-800"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Delivery Address */}
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <FaMapMarkerAlt />
                  </div>

                  <h2 className="font-bold text-gray-900">
                    Delivery Address
                  </h2>
                </div>

                <h3 className="font-semibold text-gray-800">
                  Alok Kumar
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  House No. 25, Civil Lines,
                  <br />
                  Jhansi, Uttar Pradesh - 284001
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <FaPhoneAlt className="text-purple-500" />
                  +91 98765 43210
                </div>

              </div>

            </div>

          </div>

          {/* Support Section */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-xl text-purple-600">
                <FaHeadset />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Need help with your order?
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Our support team is here to help you.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Contact Support
            </a>

          </div>

        </div>
      </div>
    </>
    );
}

export default TrackOrders;
