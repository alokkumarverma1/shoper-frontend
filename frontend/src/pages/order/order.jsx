
import React from "react";
import Navbar from "../reusable-pages/Navbar";
import { FaBox, FaTruck, FaCheckCircle, FaClock, FaArrowRight, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

function Order() {

  const orders = [
    { id: "ORD-20261001", name: "Premium Fashion T-Shirt", price: "₹799", date: "28 Oct 2026", status: "Delivered", image: "/trending/trending1.jpg", delivery: "Delivered on 30 Oct 2026" },
    { id: "ORD-20261002", name: "Smart Watch", price: "₹1,499", date: "30 Oct 2026", status: "Shipped", image: "/trending/trending-watch.jpg", delivery: "Expected delivery 04 Nov 2026" },
    { id: "ORD-20261003", name: "Premium Smartphone", price: "₹12,999", date: "01 Nov 2026", status: "Processing", image: "/trending/trending-smartphone.jpg", delivery: "Expected delivery 06 Nov 2026" }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#faf8ff] px-4 py-8 sm:px-8 lg:px-16">

        {/* PAGE HEADING */}
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest text-violet-600">YOUR ACCOUNT</p>
              <h1 className="mt-2 text-3xl font-black text-zinc-900 sm:text-4xl">My Orders</h1>
              <p className="mt-2 text-sm text-zinc-500">Track, manage and view all your orders.</p>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[{ label: "Total Orders", value: "12", icon: <FaBox /> }, { label: "Delivered", value: "08", icon: <FaCheckCircle /> }, { label: "In Progress", value: "03", icon: <FaTruck /> }, { label: "Cancelled", value: "01", icon: <FaClock /> }].map((item, i) => (
              <div key={i} className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-zinc-500 sm:text-sm">{item.label}</p>
                  <span className="text-violet-500">{item.icon}</span>
                </div>
                <h2 className="mt-3 text-2xl font-black text-zinc-900">{item.value}</h2>
              </div>
            ))}
          </div>

          {/* ORDER FILTERS */}
          <div className="mb-5 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {["All Orders", "Processing", "Shipped", "Delivered", "Cancelled"].map((item, i) => (
              <button key={i} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${i === 0 ? "bg-violet-600 text-white shadow-md" : "border border-purple-100 bg-white text-zinc-600 hover:bg-purple-50"}`}>{item}</button>
            ))}
          </div>

          {/* ORDER LIST */}
          <div className="space-y-5">
            {orders.map((order, index) => (
              <div key={order.id} className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:shadow-lg hover:shadow-purple-100">

                {/* ORDER HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 bg-purple-50/50 px-5 py-4">
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Order ID</p>
                      <p className="mt-1 text-xs font-bold text-zinc-800">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Order Date</p>
                      <p className="mt-1 text-xs font-bold text-zinc-800">{order.date}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-4 py-1.5 text-xs font-bold ${order.status === "Delivered" ? "bg-green-100 text-green-700" : order.status === "Shipped" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>{order.status}</span>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
                  <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-purple-50">
                    <img src={order.image} alt={order.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-zinc-900">{order.name}</h3>
                    <p className="mt-2 text-lg font-black text-violet-700">{order.price}</p>
                    <p className="mt-2 flex items-center gap-2 text-xs text-zinc-500"><FaMapMarkerAlt className="text-violet-500" /> {order.delivery}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700"><Link to={"/TrackOrder"}>Track order</Link> <FaArrowRight /></button>
                  </div>
                </div>

                {/* DELIVERY PROGRESS */}
                <div className="border-t border-zinc-100 px-5 py-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-500">
                    <span className="flex items-center gap-2"><FaBox className="text-violet-500" /> Ordered</span>
                    <span className="flex items-center gap-2"><FaTruck className="text-violet-500" /> Shipped</span>
                    <span className="flex items-center gap-2"><FaCheckCircle className="text-violet-500" /> Delivered</span>
                  </div>
                  <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-zinc-100">
                    <div className={`rounded-full bg-violet-600 ${order.status === "Delivered" ? "w-full" : order.status === "Shipped" ? "w-2/3" : "w-1/3"}`}></div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* HELP SECTION */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-violet-700 to-purple-500 p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-black text-white">Need help with your order?</h2>
              <p className="mt-1 text-sm text-purple-100">Our support team is here to help you.</p>
            </div>
            <Link to="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-violet-700 transition hover:bg-purple-50">Contact Support</Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Order;
