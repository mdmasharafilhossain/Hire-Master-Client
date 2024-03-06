import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "@firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = UseAxiosPublic();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const [stateProfilePicture, setStateProfilePicture] = useState([]);
  const [notification, setShowNotification] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const [stateFairRegisterName, setStateFairRegisterName] = useState("");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      //   console.log("current user", currentUser);
      setLoading(false);
      // -----------------JWT ------------------
      if (currentUser) {
        axiosPublic
          .post("/jwt", loggedUser, { withCredentials: true })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axiosPublic
          .post("/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => unsubscribe();
  }, [axiosPublic, user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    stateProfilePicture,
    setStateProfilePicture,
    stateFairRegisterName,
    setStateFairRegisterName,
    notification,
    setShowNotification,
    selectedChat,
    setSelectedChat,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
