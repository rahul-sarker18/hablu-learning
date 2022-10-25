import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const CorceItes = () => {
  const curentapi = useLoaderData();
  const { id, name, img, title, reting, price } = curentapi;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{title}</p>
        <div className="flex justify-between text-orange-400 text-2xl">
          <div className="flex items-center ">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <h1 className="ml-2">{reting}</h1>
          </div>
          <div className="flex items-center">
            <BiRupee />
            <p>{price}</p>
          </div>
        </div>
        <div className=" flex">
          <Link to='/course'><button className="btn btn-primary w-1/2">Button</button></Link>
          <Link to='/'><button className="btn btn-secondary w-1/2">Button</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default CorceItes;
