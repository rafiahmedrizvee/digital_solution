import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li className="text-[14px] font-plus jakarta sans font-medium ">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="text-[14px] font-plus jakarta sans font-medium ">
        <a href="#about" >About</a>
      </li >
      <li className="text-[14px] font-plus jakarta sans font-medium ">
        <NavLink to="/project">Projects</NavLink>
      </li>
      <li className="text-[14px] font-plus jakarta sans font-medium ">
        <NavLink to="/service">Services</NavLink>
      </li>
      <li className="text-[14px] font-plus jakarta sans font-medium ">
        <NavLink to="/price">Price</NavLink>
      </li>
      <li className="text-[14px] font-plus jakarta sans font-medium ">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-primary px-[25px] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home" className="text-[24px] font-bold text-[#202023] font-plus jakarta sans ">Digital Solutions</Link>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal gap-[20px]  ">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="">Let’s Begin</a>
      </div>
    </div>
  );
};

export default Header;
