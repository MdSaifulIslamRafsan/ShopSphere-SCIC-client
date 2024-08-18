import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import auth from "./../Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (navigate , location) => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(location?.state?.pathname ? location.state.pathname : '/');
        Swal.fire({
          title: "Good job!",
          text: "Google Login Successful!",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Oops...",
          text: errorMessage,
          icon: "error",
        });
      });
  };
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You've been successfully logged out",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };
  


  const userInfo = { user, handleGoogleLogin, handleRegister, handleLogin, handleLogout };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
