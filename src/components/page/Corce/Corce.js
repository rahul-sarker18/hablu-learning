import React from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import Sidenave from './Sidenave';

const Corce = () => {
  const corceitems = useLoaderData();
  // console.log(corceitems);
  return (
    <div className="lg:flex xl:flex xxl:flex md:flex sm:block">
      <div className=" xxl:w-1/4  xl:w-1/4  lg:w-1/4  md:w-1/4 bg-slate-200 text-black rounded-lg  gap-4 my-4 pl-6">
        {corceitems.map((sing) => (
          <Sidenave key={sing.id} item={sing}></Sidenave>
        ))}
      </div>

      <div className=" ml-6 my-4 mx-auto  w-3/4 ">
       <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Corce;