import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "./FirebaseApp";

export const auth = getAuth(app);

// Sign Up
export const signUp = async (email, pw, setMessage) => {
  return new Promise((resolve, reject) => {
    setMessage("");
    createUserWithEmailAndPassword(auth, email, pw)
      .then((userCredentials) => {
        setMessage("Signed up successfully as " + userCredentials.user.email);
        resolve();
        // TODO: Redirect to my portfolio
      })
      .catch((error) => {
        if (error.code == "auth/invalid-email") setMessage("Invalid Email.");
        else if (error.code == "auth/weak-password")
          setMessage("Password should be at least 6 characters.");
        else if (error.code == "auth/email-already-in-use")
          setMessage("Email already exists. Press Sign In to sign in.");
        else setMessage(error.message);
        // console.log(error, error.message);
        reject();
      });
  });
};

// Log In
export const logIn = async (email, pw, setMessage) => {
  return new Promise((resolve, reject) => {
    setMessage("");
    signInWithEmailAndPassword(auth, email, pw)
      .then((userCredentials) => {
        setMessage("Signed in successfully as " + userCredentials.user.email);
        resolve();
        // TODO: Redirect to my portfolio
      })
      .catch((error) => {
        if (error.code == "auth/invalid-email") setMessage("Invalid Email.");
        else if (error.code == "auth/wrong-password")
          setMessage("Wrong password.");
        else if (error.code == "auth/user-not-found")
          setMessage("User not found.");
        else setMessage(error.message);
        // console.log(error, error.message);
        reject();
      });
  });
};

// Log Out
export const logOut = async () => {
  signOut(auth).catch((error) => alert(error.message));
};
