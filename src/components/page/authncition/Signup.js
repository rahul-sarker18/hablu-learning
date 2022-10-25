import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Signup = () => {
  const { signupemailpass, auth , googlesignupFunc , gitsignFunc } = useContext(Authcontext);

  const handelsignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(username, email, password);

    //email and pass

    signupemailpass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        form.reset();
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {})
          .catch((error) => {});
        toast.success("succes full sign up");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  // google sign up
  const handelgooglesignup =()=>{
    googlesignupFunc()
    .then(result => {
      console.log(result.user);
      toast.success('success full sign up with GOOGLE')
    })
    .catch(e => console.log(e))
  }

  // github sign up

  const handelgitsignup =()=>{
    gitsignFunc()
    .then(result => {
      console.log(result.user);
      toast.success('success full sign up with GIT-HUB')
    })
    .catch(e => console.log(e))
    
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 mx-auto my-10 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>
      <form
        onSubmit={handelsignup}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="username"
            required
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
            required
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
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            aria-label="Remember me"
            className="mr-1 rounded-sm focus:ring-blue-400 focus:dark:border-blue-400 focus:ring-2 accent-blue-400"
          />
          <label for="remember" className="text-sm dark:text-gray-400">
            Remember me
          </label>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
          Sign up
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          sign up with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handelgooglesignup}
          aria-label="Log in with Google "
          className="p-3 text-3xl hover:opacity-80 rounded-sm"
        >
          <FcGoogle />
        </button>
        <button
          onClick={handelgitsignup}
          aria-label="Log in with Twitter"
          className="p-3 text-3xl hover:opacity-80 rounded-sm"
        >
          <AiFillGithub />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline dark:text-gray-100"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
