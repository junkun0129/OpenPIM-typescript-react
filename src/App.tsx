import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store, persistor, useAppSelector } from "./store/store";
import Test from "./components/Test";
import "./styles/index.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const userSelector = useAppSelector((state) => state.userReducer);
  console.log(userSelector.id);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path={`/${userSelector.id}`}
            element={<MainPage></MainPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
