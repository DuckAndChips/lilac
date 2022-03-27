// Tag, can be deletable which when deleted called deleteCallback

import React, { useState } from "react";
import { CrossClickable, Spinner } from "../../assets/img/Svg";

export function Tag({
  children,
  deletable,
  deleteHandler,
  clickable,
  clickHandler,
  selected,
}) {
  const [loading, setLoading] = useState(false);
  const handler = async () => {
    setLoading(true);
    await deleteHandler();
  };

  return (
    <div
      className={
        "rounded-full border-4 border-plum  pl-4  " +
        (deletable ? "pr-2 " : "pr-4 ") +
        (clickable
          ? "hover:cursor-pointer hover:bg-lightpink hover:text-black "
          : " ") +
        (selected ? "bg-plum text-white" : "bg-white text-plum")
      }
      onClick={clickHandler}
    >
      {children + " "}
      {deletable &&
        (loading ? (
          // Spinner
          <Spinner
            className={"inline animate-spin fill-plum"}
            height="20px"
            width="20px"
          />
        ) : (
          // Cross
          <CrossClickable
            className="inline cursor-pointer self-end fill-plum hover:fill-black"
            height="20px"
            width="20px"
            clickHandler={deleteHandler ? handler : () => {}}
          />
        ))}
    </div>
  );
}
