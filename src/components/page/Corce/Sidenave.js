import React from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Sidenave = ({ item }) => {
  const { id, name, img } = item;
  return (
    <div className="my-4 hover:text-slate-500">
      <Link to={`item/${id}`}># {name}</Link>
    </div>
  );
};

export default Sidenave;
