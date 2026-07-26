import React from "react";
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

// Static link data to keep code clean & readable
const SHOP_LINKS = ["Men","Women","Kids","Accessories","New Arrivals",];

const COMPANY_LINKS = ["About Us", "Careers","Contact","Privacy Policy","Terms & Conditions",];

const SOCIAL_LINKS = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
];

const FEATURES = [
  { icon: "🚚", title: "Free Shipping", subtitle: "On all orders above ₹999" },
  { icon: "💳", title: "Secure Payment", subtitle: "100% secure checkout" },
  { icon: "🔄", title: "Easy Returns", subtitle: "7-day return policy" },
  { icon: "📞", title: "24/7 Support", subtitle: "Always here to help" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="mt-20 bg-zinc-950 text-gray-300">
      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-violet-500">
              Shoper
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              Discover premium fashion, electronics, accessories and more.
              Experience secure shopping, fast delivery, and the best prices
              every day.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                <a key={name} href={href} aria-label={name}className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-gray-300 transition-colors duration-200 hover:bg-violet-600 hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-white">Shop</h2>
            <ul className="space-y-2.5 text-sm">
              {SHOP_LINKS.map((item) => (
                <li key={item}><a href="#" className="text-gray-400 transition-colors duration-200 hover:text-violet-400"> {item} </a> </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-white">Company</h2>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_LINKS.map((item) => (
                <li key={item}><a href="#" className="text-gray-400 transition-colors duration-200 hover:text-violet-400">{item}</a> </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Feature Highlights */}
      <div className="border-t border-zinc-900 bg-zinc-950/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center sm:text-left">
              <h3 className="text-sm font-medium text-white">
                <span className="mr-2" role="img" aria-hidden="true">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="mt-1 text-xs text-gray-400">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Footer / Copyright */}
      <div className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500 sm:flex-row">
          <p>© {currentYear} Shoper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gray-300"> Privacy Policy </a>
            <a href="#" className="transition-colors hover:text-gray-300">Terms of Service </a>
            <a href="#" className="transition-colors hover:text-gray-300">Support </a>
          </div>
        </div>
      </div>
    </footer>
  );
}