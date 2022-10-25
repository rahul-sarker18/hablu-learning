import React from "react";
import { useLoaderData } from "react-router-dom";
import Homecorceitems from "./Homecorceitems";

const CorseHome = () => {
  const allcorce = useLoaderData();
 
  return (
   <div  className=" grid gap-4 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
    {allcorce.map(al => <Homecorceitems key={al.id} detls={al} ></Homecorceitems>)}
   </div>
  );
};

export default CorseHome;
