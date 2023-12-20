import * as React from "react";
import { Component } from "react";
import Table from "../components/Table";
import SideBar from "../components/SideBar";
function MainPage() {
  return (
    <>
      <div>header</div>
      <SideBar></SideBar>
      <div className="flex-1 p-4 overflow-x-auto">
        <Table></Table>
      </div>
    </>
  );
}

export default MainPage;
