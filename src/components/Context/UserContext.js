import React, { createContext, useState } from "react";
import app from "../../Firebase/firebase";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
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

  const authInfo = {usr,auth , signupemailpass,updateusername };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
