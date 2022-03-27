// Log In Modal

import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CrossClickable } from "../../assets/img/Svg";
import { auth, logIn, signUp } from "../services/Auth";
import { CustomButton } from "./CustomButton";

export function AuthModal({ setAuthModalOpened }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  onAuthStateChanged(auth, () => {
    if (auth.currentUser) navigate("/edit");
  });

  return (
    <div className="absolute z-20 flex h-screen w-screen items-center justify-center bg-black/20 font-serif text-2xl">
      {/* Dialog window */}
      <div className="flex max-w-md flex-col items-start gap-5 border-2 border-black bg-white p-10 shadow-offset-black">
        {/* Cross Icon */}
        <CrossClickable
          className="mb-[-10px] cursor-pointer self-end fill-black hover:fill-plum"
          clickHandler={() => navigate("/")}
          height="20px"
          width="20px"
        />

        {/* Email */}
        <div className="w-full">
          <h1>Email</h1>
          <input
            type="text"
            className="w-full border-2 border-black text-lg outline-none"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="mb-2 w-full">
          <h1>Password</h1>
          <input
            type="password"
            className="w-full border-2 border-black  text-lg outline-none"
            onChange={(event) => {
              setPw(event.target.value);
            }}
            value={pw}
          />
        </div>

        {/* Buttons */}
        <div className="flex w-full justify-center gap-5">
          <CustomButton
            highlight
            clickHandler={() => signUp(email, pw, setMessage)}
          >
            {" "}
            Sign Up{" "}
          </CustomButton>
          <CustomButton clickHandler={() => logIn(email, pw, setMessage)}>
            {" "}
            Log In{" "}
          </CustomButton>
        </div>

        {/* Status Message */}
        <p className="w-full text-center text-sm">{message}</p>
      </div>
    </div>
  );
}
