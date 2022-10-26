import React from 'react';

const Blog = () => {
    return (
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              HABLU LEARNING
            </h2>
            
          </div>
          <div>
            <div className="border-2 my-3 border-sky-500 p-6">
              <h1 className="text-2xl mb-4 font-bold">1. what is cors?</h1>
              <p>
                <span className="text-red-500 mr-3">ANS:</span>
                Cross-origin resource sharing CORS is a browser mechanism which
                enables controlled access to resources located outside of a
                given domain. It extends and adds flexibility to the same-origin
                policy SOP. However, it also provides potential for cross-domain
                attacks, if a website's CORS policy is poorly configured and
                implemented. CORS is not a protection against cross-origin
                attacks such as cross-site request forgery CSRF.
              </p>
            </div>

            <div className="border-2 my-3 border-sky-500 p-6">
              <h1 className="text-2xl mb-4 font-bold">
                2. Why are you using firebase? What other options do you have to
                implement authentication?
              </h1>

              <p>
                <span className="text-red-500 mr-3">ANS:</span>Firebase
                Authentication provides backend services, easy-to-use SDKs, and
                ready-made UI libraries to authenticate users to your app. It
                supports authentication using passwords, phone numbers, popular
                federated identity providers like Google, Facebook and Twitter,
                and more.
              </p>
            </div>
            <div className="border-2 my-3 border-sky-500 p-6">
              <h1 className="text-2xl mb-4 font-bold"> 3. How does the private route work?</h1>

              <p>
                <span className="text-red-500 mr-3">ANS:</span>Private Routes in
                React Router also called Protected Routes require a user being
                authorized to visit a route read: page. So if a user is not
                authorized for a specific page, they cannot access it.
              </p>
            </div>
            <div className="border-2 border-sky-500 p-6">
              <h1 className="text-2xl mb-4 font-bold">4. What is Node? How does Node work?</h1>

              <p>
                <span className="text-red-500 my-3 mr-3">ANS:</span>Node. js is a
                JavaScript runtime environment that achieves low latency and
                high throughput by taking a “non-blocking” approach to serving
                requests. In other words, Node. js wastes no time or resources
                on waiting for I/O requests to return.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;