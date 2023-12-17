import * as React from "react";
import { Component } from "react";
function BasicCheckBox({ checked = false, onClick = () => {} }) {
  return (
    <div>
      <div
        onClick={(e) => onClick()}
        className="w-[16px] h-[16px] rounded-sm border-zinc-500 border flex justify-center items-center
            cursor-pointer hover:border-indigo-500 hover:text-indigo-500"
      >
        {checked && <i className="fa-solid fa-check pt-[2px]"></i>}
      </div>
    </div>
  );
}

export default BasicCheckBox;
