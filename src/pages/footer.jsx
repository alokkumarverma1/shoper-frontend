import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer text-black  py-10 px-5 sm:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h1 className="text-3xl font-bold title mb-3">Shoper</h1>
            <p className="text-sm leading-6">
              Your trusted e-commerce destination for fashion, gadgets, and more.
              Shop smart, shop fast — only with Shoper.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold title mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">Shop</li>
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-lg font-semibold title mb-3">Customer Care</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">FAQs</li>
              <li className="hover:text-orange-400 cursor-pointer">Returns</li>
              <li className="hover:text-orange-400 cursor-pointer">Shipping Info</li>
              <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
            <div className="flex items-center space-x-5 text-xl">
              <a href="#" className="hover:text-orange-400">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-orange-400">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-orange-400">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-orange-400">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Shoper. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
