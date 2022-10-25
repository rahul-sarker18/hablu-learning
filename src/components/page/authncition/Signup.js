import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 mx-auto my-10 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
            Sign up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            g
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            g
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline dark:text-gray-100"
          >
            Sign up
          </Link>
        </p>
      </div>
    );
};

export default Signup;