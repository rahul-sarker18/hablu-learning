import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CorceItes = () => {
  const curentapi = useLoaderData();
  const { id, name, img, title } = curentapi;
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Detls</div>
          <div className="badge badge-outline">Parces</div>
        </div>
      </div>
    </div>
  );
};

export default CorceItes;
