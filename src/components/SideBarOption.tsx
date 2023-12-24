import * as React from "react";
import { Component } from "react";
type SideBarOptionTypes = {
  lable: string;
  imgURL: string;
};
function SideBarOption({ lable, imgURL }: SideBarOptionTypes) {
  return (
    <>
      <div className="flex items-center flex-col">
        <img src={imgURL} alt="" className=" w-6 h-6 mb-2" />
        <div className="text-white text-[0.7rem]">{lable}</div>
      </div>
    </>
  );
}

export default SideBarOption;
