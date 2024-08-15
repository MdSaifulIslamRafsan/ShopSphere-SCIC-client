import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2";
import auth from "./../Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();



  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
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
  useEffect(() => {
    const unSubscribe = () => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
    };
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = { user, loading, handleGoogleLogin, handleRegister };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
