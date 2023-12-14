import * as React from "react";
import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
function Test() {
  const testValue = useAppSelector((state) => state.testReducer.testValue);
  return (
    <>
      <h1>{testValue}</h1>
    </>
  );
}

export default Test;
