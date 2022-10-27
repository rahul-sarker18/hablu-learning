import React from 'react';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const PayWith = () => {
  const navegate = useNavigate();
  const handelbokking = (e) => {
    e.preventDefault();
    toast.success("success the proces . thank yuo !!!");
    navegate("/");
    
  };

  return (
    <div data-aos="zoom-out-up" className="flex mx-auto my-6 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Booking course</h1>
      </div>
      <form
        onSubmit={handelbokking}
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label for="phone" className="block mb-2 text-sm">
              Acount Name
            </label>
            <input
              required
              type="number"
              name="phone"
              id="phone"
              placeholder="all bank available"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label for="text" className="block mb-2 text-sm">
              Reference No
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Reference No"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="space-y-2 flex justify-between items-center">
          <div>
            <Link
              to="/course"
              className="btn btn-outline btn-error items-center"
            >
              Cansell
            </Link>
          </div>
          <div>
            <button className="btn btn-outline btn-success">Submite</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PayWith;