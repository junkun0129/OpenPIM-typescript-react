import * as React from "react";
import { Component } from "react";
function BasicButton({ label = "label", onClick = () => {} }) {
  return (
    <div
      onClick={(e) => onClick()}
      className="w-full h-[36px] bg-indigo-500 text-zinc-100
          cursor-pointer hover:shadow-md hover:bg-indigo-600 shadow-zinc-500
          rounded-sm flex items-center justify-center"
    >
      {label}
    </div>
  );
}

export default BasicButton;
