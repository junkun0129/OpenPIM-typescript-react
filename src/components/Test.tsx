import * as React from "react";
import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
function Test() {
  const testValue = useAppSelector((state) => state.testReducer.testValue);
  return (
    <>
      <h1 className="text-red-100 w-4 h7 border-black">{testValue}</h1>
    </>
  );
}

export default Test;
