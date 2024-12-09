import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updateInfo) => {
    return updateProfile(auth.currentUser, updateInfo);
  };
  const authInfo = {
    createUser,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
