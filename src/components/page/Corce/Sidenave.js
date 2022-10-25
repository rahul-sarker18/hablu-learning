import React from "react";
import { Link } from "react-router-dom";

const Sidenave = ({ item }) => {
  const { id, name,  } = item;
  return (
    <div className="my-4 hover:text-slate-500">
      <Link to={`details/${id}`}># {name}</Link>
    </div>
  );
};

export default Sidenave;
