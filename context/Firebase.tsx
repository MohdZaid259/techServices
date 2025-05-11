'use client'

import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {conf} from '../conf.js'
import {  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth"

const app = initializeApp(conf);
const auth = getAuth(app) 

type FirebaseContextType = {
  currentUser: User | null
  logIn: (email: string, password: string) => Promise<any>
  logOut: () => Promise<void>
}

export const FirebaseContext = createContext<FirebaseContextType | null>(null)

const logIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
const logOut = () => signOut(auth)

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => { 
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <FirebaseContext.Provider value={{ currentUser, logIn, logOut }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext)
  if (!context) throw new Error("useFirebase must be used within FirebaseProvider")
  return context
}
