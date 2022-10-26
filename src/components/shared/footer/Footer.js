import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 mt-6 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src="" alt="" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
        <Link>
          <FaFacebook></FaFacebook>
        </Link>
        <Link>
         <FaGoogle></FaGoogle>
        </Link>
        <Link>
          <FaGithub></FaGithub>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;