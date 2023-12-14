import * as React from "react";
import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
function Test() {
  const testValue = useSelector((state) => state.testReducer.testValue);
  return (
    <>
      <h1>{testValue}</h1>
    </>
  );
}

export default Test;
