import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-orange-300 text-slate-900 shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl items-center mb-3 w-20">

          <img  src="https://i.ibb.co/1J1ZchZ/images-removebg-preview.png" alt="" />
         
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/course">Course</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Bolg</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content bg-slate-200  mt-3 p-2 shadow rounded-box w-52"
        >
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/course">Course</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Bolg</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-10 gap-4  ">
        <label
          htmlFor="Toggle1"
          className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
        >
          <span className='text-slate-800'>Dark</span>
          <span className="relative">
            <input id="Toggle1" type="checkbox" className="hidden peer" />
            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-blue-400"></div>
            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
          </span>
          <span className='text-slate-800'>Light</span>
        </label>

        <div className="avatar indicator">
          <span className="indicator-item badge badge-secondary"></span>
          <div className="w-10 h-10 rounded-full border-solid border-2 border-sky-500 ">
            <img
              src="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;