import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
export const Authcontext = createContext();

const auth =getAuth(app)

const UserContext = ({ children }) => {
    const [usr , setUser] =useState(null);
    const [loder , setloder] =useState(true)

    //email and password signup
    const signupemailpass =(email, password)=>{
      setloder(true)
      return createUserWithEmailAndPassword(auth , email , password);
    }
    const updateusername =(username)=>{
      setloder(true)
      return updateProfile(auth.user, {
        displayName: username
      })
    }

    //log in email and password
    const loginemailfunc =(email , password)=>{
      setloder(true)
      return signInWithEmailAndPassword(auth , email , password)
    }

    // google sign up
    const provider = new GoogleAuthProvider();
    const googlesignupFunc =()=>{
      setloder(true)
      return signInWithPopup(auth ,provider)
    }

    // git hub sign  up
    const providerg = new GithubAuthProvider();
    const gitsignFunc =()=>{
      setloder(true)
      return signInWithPopup(auth , providerg)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth , createuser=>{
        setUser(createuser)
        setloder(false)
      })
      return()=>{
        unsubscribe()
      }
    },[])

  const authInfo = {usr,auth ,loder, signupemailpass,updateusername , googlesignupFunc , gitsignFunc , loginemailfunc };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
