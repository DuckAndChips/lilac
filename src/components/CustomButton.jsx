// Custom designed button

import React, { useState } from "react";
import { Spinner, Checkmark, CrossClickable } from "../../assets/img/Svg";

export function CustomButton({ children, highlight, clickHandler }) {
  const [loading, setLoading] = useState(false);
  const [checkmark, setCheckmark] = useState(false);
  const [cross, setCross] = useState(false);
  const handler = async () => {
    setLoading(true);
    clickHandler()
      .then(() => {
        setLoading(false);
        setCheckmark(true);
        setTimeout(() => setCheckmark(false), 1000);
      })
      .catch(() => {
        setLoading(false);
        setCross(true);
        setTimeout(() => setCross(false), 1000);
      });
  };

  return (
    <button
      className={
        "h-min border-2 border-black px-4 py-2 text-xl italic hover:bg-lightpink " +
        (loading || checkmark || cross
          ? "bg-lightpink"
          : highlight
          ? "bg-gold"
          : "bg-plum text-white hover:text-black")
      }
      onClick={clickHandler ? handler : () => {}}
    >
      {loading ? (
        // Spinner
        <Spinner
          className={"animate-spin fill-black"}
          height="27px"
          width="27px"
        />
      ) : checkmark ? (
        // Checkmark
        <Checkmark className={"fill-black"} height="27px" width="27px" />
      ) : cross ? (
        <CrossClickable className={"fill-black"} height="27px" width="27px" />
      ) : (
        // Children
        children
      )}
    </button>
  );
}
