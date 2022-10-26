import React, { useContext } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { MdGolfCourse } from "react-icons/md";
import { GrBlog } from "react-icons/gr";
import Coursebaner from "./Coursebaner";
import Blog from "../Blog/Blog";
import Signup from "../authncition/Signup";
import { Authcontext } from '../../Context/UserContext';

const Home = () => {
  const allcorce = useLoaderData();
  const {usr} = useContext(Authcontext);
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome you! To come to us.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              We provide all the services of this institution in good quality.
              Our coach is accessible 24 hours a day.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                course
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src=" https://i.ibb.co/7nL8GYy/68581472.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* corces */}

      <div className="flex items-center pt-4 space-x-1 my-4">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 flex text-4xl text-indigo-100">
          <MdGolfCourse /> Course <MdGolfCourse />
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>

      <div className=" my-6 grid gap-4 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
        {allcorce.map((al) => (
          <Coursebaner key={al.id} detls={al}></Coursebaner>
        ))}
      </div>

      {/* blog */}
      <div className="flex items-center pt-4 space-x-1 my-4">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 flex text-4xl text-indigo-100">
          <GrBlog /> Blog <GrBlog />
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <Blog></Blog>

      {/* log in */}


      {usr?.uid ?  undefined : <div>
     <div className="flex items-center pt-4 space-x-1 my-4">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 flex text-4xl text-indigo-100">Registration</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <Signup></Signup>
     </div>}
     
    </div>
  );
};

export default Home;