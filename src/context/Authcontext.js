import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthProvider({ children }) {
     const [user,setUser]=useState({});
    function signUp(email,password){
         createUserWithEmailAndPassword(auth,email,password)
         setDoc(doc(db,'users',email),{
          savedShows:[]
         })
        
    }
    function logOut(){
        signOut(auth);
    }
    function logIn(email , password){
        signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    })

        
  return <AuthContext.Provider value={{signUp,user,logIn,logOut}}>{children}</AuthContext.Provider>;


  
}
export function UserAuth() {
  return useContext(AuthContext);
}
