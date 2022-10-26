import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import { Link, useLoaderData } from 'react-router-dom';

const CoeurseDetls = () => {
    const curentapi = useLoaderData();
    const {name, img, title, reting, price } = curentapi;
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
            <Link to='/course' className="btn btn-primary w-1/2"><button >Course</button></Link>
            <Link to='/pay' className="btn btn-secondary w-1/2"><button >By now</button></Link>
            
          </div>
        </div>
      </div>
    );
};

export default CoeurseDetls;