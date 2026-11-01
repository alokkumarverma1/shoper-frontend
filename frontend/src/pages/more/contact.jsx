
import React, { useState } from "react";
import Navbar from "../reusable-pages/Navbar";
import { FaHeadset, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaSearch, FaArrowRight, FaQuestionCircle, FaShippingFast, FaUndo, FaCreditCard } from "react-icons/fa";

function Contact(){

    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        {question:"How can I track my order?",answer:"You can track your order by visiting the Orders section and clicking on the Track Order button."},
        {question:"How can I return or exchange a product?",answer:"You can request a return or exchange from your Orders section within the eligible return period."},
        {question:"What payment methods are available?",answer:"We support multiple payment options including UPI, Debit Cards, Credit Cards and other available payment gateways."},
        {question:"How long does delivery take?",answer:"Most orders are delivered within 3-7 business days depending on your delivery location."},
        {question:"How can I cancel my order?",answer:"Visit your Orders section and check whether the Cancel Order option is available for your purchase."}
    ];

    return(<>
    <Navbar></Navbar>

    <div className="helpcenter min-h-screen bg-[#faf9ff] pt-24 pb-16 px-4 sm:px-8">

        <div className="max-w-7xl mx-auto">

            {/* Hero Section */}
            <div className="text-center py-12 sm:py-16">
                <span className="inline-block rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-violet-700">CUSTOMER SUPPORT</span>
                <h1 className="mt-5 text-3xl sm:text-5xl font-bold text-gray-900">How Can We <span className="text-violet-600">Help You?</span></h1>
                <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">We're here to help you with your orders, payments, returns and anything else you need.</p>
            </div>

            {/* Quick Help */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaShippingFast/></div>
                    <h3 className="mt-5 font-bold text-gray-900">Track Order</h3>
                    <p className="mt-2 text-sm text-gray-500">Check your order status and delivery updates.</p>
                    <a href="/track-orders" className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600">Track Now <FaArrowRight/></a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaUndo/></div>
                    <h3 className="mt-5 font-bold text-gray-900">Returns & Refunds</h3>
                    <p className="mt-2 text-sm text-gray-500">Get help with product returns and refunds.</p>
                    <a href="/orders" className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600">Learn More <FaArrowRight/></a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaCreditCard/></div>
                    <h3 className="mt-5 font-bold text-gray-900">Payment Help</h3>
                    <p className="mt-2 text-sm text-gray-500">Need help with payments or billing issues?</p>
                    <a href="#contact-form" className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600">Get Help <FaArrowRight/></a>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaQuestionCircle/></div>
                    <h3 className="mt-5 font-bold text-gray-900">FAQs</h3>
                    <p className="mt-2 text-sm text-gray-500">Find answers to frequently asked questions.</p>
                    <a href="#faq" className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600">View FAQs <FaArrowRight/></a>
                </div>

            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

                <div>
                    <span className="text-sm font-semibold text-violet-600">GET IN TOUCH</span>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900">We'd Love to Hear From You</h2>
                    <p className="mt-4 text-sm leading-7 text-gray-500">Have a question or facing an issue? Reach out to our support team. We'll do our best to help you as quickly as possible.</p>

                    <div className="mt-8 space-y-5">

                        <div className="flex items-center gap-4 rounded-2xl bg-white p-5 border border-gray-100">
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaEnvelope/></div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Support</h3>
                                <p className="mt-1 text-sm text-gray-500">support@shoper.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl bg-white p-5 border border-gray-100">
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaPhoneAlt/></div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Phone Support</h3>
                                <p className="mt-1 text-sm text-gray-500">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl bg-white p-5 border border-gray-100">
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-violet-600 text-xl"><FaHeadset/></div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Support Hours</h3>
                                <p className="mt-1 text-sm text-gray-500">Monday - Saturday, 9 AM - 6 PM</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div id="contact-form" className="rounded-3xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                    <p className="mt-2 text-sm text-gray-500">Fill out the form and we'll get back to you.</p>

                    <form onSubmit={(e)=>{e.preventDefault(); alert("Your message has been submitted!");}} className="mt-7 space-y-5">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Full Name</label>
                            <input type="text" required placeholder="Enter your name" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"/>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address</label>
                            <input type="email" required placeholder="Enter your email" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"/>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Subject</label>
                            <select required className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-violet-500">
                                <option value="">Select a subject</option>
                                <option>Order Related</option>
                                <option>Payment Issue</option>
                                <option>Return & Refund</option>
                                <option>Product Related</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Your Message</label>
                            <textarea required rows="4" placeholder="Write your message here..." className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"></textarea>
                        </div>

                        <button type="submit" className="w-full rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-700 hover:shadow-lg">Send Message <FaArrowRight className="inline ml-2"/></button>

                    </form>
                </div>

            </div>

            {/* FAQ Section */}
            <div id="faq" className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold text-violet-600">HELP & SUPPORT</span>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <p className="mt-3 text-sm text-gray-500">Find quick answers to common questions.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq,index)=>(
                        <div key={index} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                            <button onClick={()=>setActiveFaq(activeFaq===index?null:index)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-gray-800 hover:text-violet-600 transition">
                                {faq.question}
                                <span className="text-xl text-violet-600">{activeFaq===index?"−":"+"}</span>
                            </button>
                            {activeFaq===index && <p className="px-5 pb-5 text-sm leading-6 text-gray-500">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Support Banner */}
            <div className="mt-16 rounded-3xl bg-linear-to-r from-violet-700 to-indigo-600 p-8 sm:p-12 text-center text-white">
                <FaHeadset className="mx-auto text-4xl"/>
                <h2 className="mt-5 text-2xl sm:text-3xl font-bold">Still Need Assistance?</h2>
                <p className="mt-3 text-sm text-purple-100">Our customer support team is always happy to help you.</p>
                <a href="mailto:support@shoper.com" className="inline-block mt-6 rounded-full bg-white px-7 py-3 font-semibold text-violet-700 hover:bg-purple-50 transition">Email Our Team</a>
            </div>

        </div>
    </div>
    </>)
}

export default Contact;
