import React, { useContext } from "react";
import { FaGoogle} from "react-icons/fa";
import {AiFillGithub  } from "react-icons/ai";
import { BsFacebook  } from "react-icons/bs";
import { Authcontext } from "../../Context/UserContext";

const Profile = () => {
  const { usr } = useContext(Authcontext);

  return (
    <div className="flex flex-col mx-auto my-8 justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
     {
      usr?.photoURL ?  <img
      src={usr?.photoURL}
      alt=""
      className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
    /> : <img
    src='https://www.krasbival.com/image/clients/noimg.jpg'
    alt=""
    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
  />
     }
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{usr?.displayName}</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-400">
            {usr?.email}
          </p>
        </div>
        <div className="flex p-2  pt-2 space-x-4 align-center justify-center">
          <AiFillGithub  className="rounded-md dark:text-gray-100  text-3xl hover:dark:text-blue-400 "/>
         <FaGoogle className="rounded-md dark:text-gray-100 text-3xl hover:dark:text-blue-400 "/>
         <BsFacebook className="rounded-md dark:text-gray-100 text-3xl hover:dark:text-blue-400 "/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
