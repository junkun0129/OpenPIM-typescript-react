import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Test></Test>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
