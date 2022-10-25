import React, { createContext, useState } from "react";
import app from "../../Firebase/firebase";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
export const Authcontext = createContext();

const auth =getAuth(app)

const UserContext = ({ children }) => {
    const [usr , setUser] =useState('rahul');

    //email and password signup
    const signupemailpass =(email, password)=>{
      return createUserWithEmailAndPassword(auth , email , password);
    }
    const updateusername =(username)=>{
      return updateProfile(auth.user, {
        displayName: username
      })
    }

    //log in email and password
    const loginemailfunc =(email , password)=>{
      return signInWithEmailAndPassword(auth , email , password)
    }

    // google sign up
    const provider = new GoogleAuthProvider();
    const googlesignupFunc =()=>{
      return signInWithPopup(auth ,provider)
    }

    // git hub sign  up
    const providerg = new GithubAuthProvider();
    const gitsignFunc =()=>{
      return signInWithPopup(auth , providerg)
    }

  const authInfo = {usr,auth , signupemailpass,updateusername , googlesignupFunc , gitsignFunc , loginemailfunc };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
