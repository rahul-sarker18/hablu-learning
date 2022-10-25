import React from 'react';

const Blog = () => {
    return (
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
             HABLU LEARNING
            </h2>
            <p className="mt-4 text-lg dark:text-gray-400">
              Pellentesque viverra, leo id euismod laoreet, nunc risus molestie
              orci, vel faucibus quam justo id mauris.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Quisque at urna</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Vivamus ultricies bibendum tortor, molestie imperdiet justo
                  cursus eu. Donec quis arcu magna. Integer tempor egestas
                  dolor.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    );
};

export default Blog;