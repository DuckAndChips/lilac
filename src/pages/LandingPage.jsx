// Landing page

import React from "react";
import { useState, useCallback } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthModal } from "../components/AuthModal";
import { auth } from "../services/Auth";
import screenshotURL from "../../assets/img/screenshot.png";

export function LandingPage({}) {
  const navigate = useNavigate();

  // For when the Sign Up/Log In button is pressed
  const authClickHandler = () => {
    if (auth.currentUser) navigate("/edit"); // Skip auth if logged in
    else navigate("/auth");
  };

  return (
    <>
      {/* {authModalOpened && <AuthModal setAuthModalOpened={setAuthModalOpened} />} */}

      <Outlet />

      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll bg-lightblue font-serif md:overflow-hidden ">
        {/* Background */}
        <h1 className="absolute -translate-x-8 rotate-90 self-center text-[calc(60vw+50px)] font-bold text-lightpink md:h-screen md:transform-none md:self-auto md:text-[calc(35vw+10vh)]">
          Lilac
        </h1>

        <div className="z-10 mt-10 flex flex-col items-center gap-10">
          {/* Header */}
          <div className="flex w-screen justify-between self-start px-16 text-lg">
            <h1>Lilac</h1>
            <a
              className="cursor-pointer font-bold text-plum hover:text-black"
              onClick={authClickHandler}
            >
              Sign Up / Log in
            </a>
          </div>

          {/* All Content */}
          <div className="flex flex-col items-center gap-10 md:mx-24 md:mt-28 md:max-w-[1500px] md:translate-y-16 md:flex-row md:items-start md:justify-between md:gap-20">
            {/* Info Area */}
            <div className="flex flex-col justify-center md:items-start xl:mt-16">
              {/* Tagline */}
              <h1 className="mx-20 mb-5 block text-center text-4xl font-bold md:mx-0 md:text-left md:text-6xl md:leading-tight">
                Create <span className="text-plum">stunning portfolios</span>{" "}
                with just a few taps.
              </h1>
              {/* Buttons */}
              <div className="mb-7 flex justify-center gap-10 text-lg">
                <button
                  className="border-2 border-black bg-gold px-6 py-3 text-xl italic text-black shadow-offset-black hover:bg-lightpink hover:text-black"
                  onClick={authClickHandler}
                >
                  Create Yours
                </button>
                <button
                  className="border-2 border-black bg-plum px-6 py-3 text-xl italic text-white shadow-offset-black hover:bg-lightpink hover:text-black"
                  onClick={() => navigate("/view/dVp52f8Xg6gTLYdxXDkbv84hZVr2")}
                >
                  Demo
                </button>
              </div>
              {/* Credit */}
              <h2 className="text-center">
                <a
                  href="https://github.com/DuckAndChips/lilac"
                  className="text-plum hover:text-black"
                >
                  Github
                </a>{" "}
                | Made by{" "}
                <Link
                  className="text-plum hover:text-black"
                  to={"/view/dVp52f8Xg6gTLYdxXDkbv84hZVr2"}
                >
                  {" "}
                  Jaden Tse{" "}
                </Link>{" "}
                in ???????? <a></a>
              </h2>
            </div>

            {/* Screenshot */}
            <img
              src={screenshotURL}
              alt="Screenshot"
              className="w-[70vw] max-w-sm border-2 border-black shadow-offset-black md:w-[40vw] md:max-w-xl md:-translate-y-40"
            />
          </div>
        </div>
      </div>
    </>
  );
}
