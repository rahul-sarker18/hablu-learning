import React from "react";
import { BiRupee } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowCircleDown } from "react-icons/fa";

const CorceItes = () => {
  const curentapi = useLoaderData();
  const {name, img, title, reting, price } = curentapi;
  return (
    <div className="card mx-auto w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <FaArrowCircleDown className="text-3xl text-amber-400   font-extrabold"></FaArrowCircleDown>
        </div>
        <p>{title}</p>
        <div className="flex justify-between text-orange-400 text-2xl">
          <div className="flex items-center ">
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <h1 className="ml-2">{reting}</h1>
          </div>
          <div className="flex items-center">
            <BiRupee />
            <p>{price}</p>
          </div>
        </div>
        <div className=" flex">
          <Link to="/course" className="btn btn-primary w-1/2">
            <button>Course</button>
          </Link>
          <Link to="/pay" className="btn btn-secondary w-1/2">
            <button>By now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorceItes;
