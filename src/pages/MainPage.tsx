import * as React from "react";
import { Component } from "react";
import Table from "../components/Table";
import SideBar from "../components/SideBar";
import TableContent from "../components/TableContent";
import Header from "../components/Header";
function MainPage() {
  return (
    <>
      <div className="w-screen h-screen bg-mainBG">
        <div className="h-[10%] w-full bg-white shadow-xl">
          <Header></Header>
        </div>
        <div className="flex h-[90%]">
          <div className="w-1/8">
            <SideBar></SideBar>
          </div>
          <div className="w-full flex justify-center items-center">
            <TableContent></TableContent>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
