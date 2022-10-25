import React, { createContext, useState } from "react";
import app from "../../Firebase/firebase";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth'
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

    // google sign up
    const provider = new GoogleAuthProvider();
    const googlesignupFunc =()=>{
      return signInWithPopup(auth ,provider)
    }

  const authInfo = {usr,auth , signupemailpass,updateusername , googlesignupFunc };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
