import React from 'react';

import { BiRupee } from 'react-icons/bi';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf'


const ref = React.createRef();
const CoeurseDetls = () => {
    const curentapi = useLoaderData();
    const {name, img, title, reting, price } = curentapi;
    const options = {
      orientation: "landscape",
      unit: "in",
      format: [8, 8],
    };
    return (
      <div className="card w-96 mx-auto my-6 bg-base-100 shadow-xl"  ref={ref}>
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
          <ReactToPdf
            targetRef={ref}
            filename="div-blue.pdf"
            options={options}
            x={0.5}
            y={0.5}
            scale={0.8}
          >
            {({ toPdf }) => (
              <button onClick={toPdf}>
                
                <FaArrowCircleDown className="text-3xl text-amber-400   font-extrabold"></FaArrowCircleDown>
              </button>
            )}
          </ReactToPdf>
        </div>
          <p>{title}</p>
          <div className="flex justify-between text-orange-400 text-2xl">
            <div className="flex items-center ">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
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

export default CoeurseDetls;