import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userImg from "../assets/user.png";
import NikeLogo from "../assets/favicon.ico";
import Search from "../assets/search.png";
import Heart from "../assets/outline-heart.png";
import Bag from "../assets/bag.png";
import Hamburger from "../assets/hamburger.png";
import SlidingNavbar from "./SlidingNavbar";
import { selectItems } from "../features/cart/cartSlice";

const Navbar = () => {
  const cartItems = useSelector(selectItems);
  const [user,setUser] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({
    help: false,
    profile: false,
  });
  const [open, setOpen] = useState(false);

  const menuOptions = user
    ? ["Find a store", "Help", "Hi ,"]
    : ["Find a store", "Help", "Join us", "Login"];

  const dropdownData = {
    Help: [
      "Order Status",
      "Dispatch and Delivery",
      "Return",
      "Contact Us",
      "Privacy Policy",
      "Terms and Sale",
      "Send us feedback",
    ],
    "Hi ,": ["Profile", "Orders", "Favourites", "Log Out"],
  };

  const toggleDropdown = (key, isVisible) => {
    setDropdownVisible((prev) => ({ ...prev, [key]: isVisible }));
  };

  const renderDropdown = (key) => {
    const options = dropdownData[key];
    if (!options) return null;
    return (
      <div
        onMouseEnter={() => toggleDropdown(key, true)}
        onMouseLeave={() => toggleDropdown(key, false)}
        className={`absolute ${
          dropdownVisible[key] ? "block" : "hidden"
        } top-5 bg-white w-max rounded-md shadow-lg z-40`}
      >
        <h1 className="text-lg my-3 mx-4">{key}</h1>
        <ul className="space-y-2 px-4">
          {options.map((label, index) => (
            <li
              key={index}
              className="opacity-75 hover:opacity-100 cursor-pointer"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <nav className="relative">
      {/* Top Navigation */}
      <div className="first md:flex hidden justify-items-center ml-auto">
        <div className="px-5 md:px-12 pt-2 flex justify-between items-center w-full">
          <div className="first-first">
            <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
              <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
            </svg>
          </div>

          <div className="flex items-center space-x-6">
            {menuOptions.map((opt, index) => (
              <div key={index} className="relative flex  items-center">
                <p
                  className="text-xs hover:opacity-70 cursor-pointer"
                  onMouseEnter={() => toggleDropdown(opt, true)}
                  onMouseLeave={() => toggleDropdown(opt, false)}
                >
                  {opt}
                </p>
                {renderDropdown(opt)}
                {index < menuOptions.length - 1 && (
                  <span className="mx-3">|</span>
                )}
              </div>
            ))}
            {user && (
              <div className="flex items-center">
                <p className="text-xs hover:opacity-70">Subham</p>
                <img className="w-7 mx-2" src={userImg} alt="User" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="second">
        <div className="px-5 flex md:px-12 md:py-2 justify-between items-center mx-auto">
          <Link to="/">
            <img src={NikeLogo} alt="Nike Logo" />
          </Link>
          <div className="hidden lg:flex space-x-8">
            {[
              "New & Featured",
              "Men",
              "Women",
              "Kids",
              "Sale",
              "SNKRS",
              "Admin",
            ].map((category, index) => (
              <h3
                key={index}
                className="border-b-2 hover:border-black transition-all delay-75 cursor-pointer"
              >
                {category}
              </h3>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <img className="w-7 h-7 cursor-pointer" src={Search} alt="Search" />
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block border-2 px-4 py-1 rounded-lg focus:border-black"
            />
            <img
              className="w-7 h-7 hidden md:block cursor-pointer"
              src={Heart}
              alt="Favourites"
            />
            <Link to="/shoppingCart">
              <div className="relative">
                <img className="w-7 h-7 cursor-pointer" src={Bag} alt="Cart" />
                
                {/* <p className="absolute top-3 left-2.5 text-xs">
                  {cartItems?.length || 0}
                </p> */}
              </div>
            </Link>
            <img className="w-8 h-8 md:hidden" src={userImg} alt="User" />
            <img
              className="w-7 h-7 md:hidden cursor-pointer"
              src={Hamburger}
              alt="Menu"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
      <SlidingNavbar open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
