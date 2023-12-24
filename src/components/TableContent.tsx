import * as React from "react";
import { Component } from "react";
import Table from "./Table";
function TableContent() {
  return (
    <>
      <div className="w-[96%] h-[94%] select-none">
        <div className="h-[7%] w-full"></div>
        <div className="h-[93%] w-full">
          <Table></Table>
        </div>
      </div>
    </>
  );
}

export default TableContent;
