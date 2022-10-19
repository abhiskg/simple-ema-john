import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  user: null | User;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
  updateUser: (user: User, name: string) => Promise<void>;
}

export const UserContext = createContext<null | UserContextProps>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const googleProvider = new GoogleAuthProvider();

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (user: User, name: string) => {
    return updateProfile(user, {
      displayName: name,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{ user, signIn, signUp, signInWithGoogle, logOut, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
