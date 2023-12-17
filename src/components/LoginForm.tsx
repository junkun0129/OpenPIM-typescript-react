import * as React from "react";
import { Component, useState } from "react";
import BasicCheckBox from "./BasicCheckBox";
import BasicButton from "./BasicButton";
import BasicInput from "./BasicInput";
import { useMutation } from "react-query";
import { loginAPI } from "../utils/apiRequests";
import mockUser from "../mockData/mockUser";
import { useAppDispatch, useAppSelector } from "../store/store";
import { createUser, userReducer } from "../store/slices/userSlice";
import { createReducer } from "@reduxjs/toolkit";
import { userType } from "../types/userTypes";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  // -----------------------------------------------------------------
  // variables
  // -----------------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStayLogin, setIsStayLogin] = useState(false);
  const isMockData = import.meta.env.VITE_MOCK_DATA === "true";
  const dispatch = useAppDispatch();
  const userSelector = useAppSelector((state) => state.userReducer);
  const navigater = useNavigate();
  const loginMutaion = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ data }) => {
      console.log(data, "data");
      dispatch(createReducer);
    },
  });

  React.useEffect(() => {
    console.log(userSelector, "selector");
  }, [userSelector]);
  //   const dispatch = useDispatch();

  // -----------------------------------------------------------------
  // functions
  // -----------------------------------------------------------------
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleStayLoginClick = () => {
    setIsStayLogin(!isStayLogin);
  };

  const handleLogin = () => {
    // let formdata = new FormData();
    // formdata.append("email", email);
    // formdata.append("password", password);
    // dispatch(loginApi(formdata));
    if (isMockData) {
      dispatch(createUser(mockUser));
      navigater(`/${userSelector.id}`);
    } else {
      loginMutaion.mutate({ email, password });
    }
  };

  // -----------------------------------------------------------------
  // render
  // -----------------------------------------------------------------
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* form title */}
      <div className="text-2xl font-bold mt-10 mb-5">OpenPIM</div>

      {/* login text */}
      <div className="text-2xl my-2">ログイン</div>
      <div className="text-sm">アカウント情報を入力してください</div>

      {/* mail input */}
      <div className="w-[70%] mt-3">
        <BasicInput label="メールアドレス" onChange={handleEmailChange} />
      </div>

      {/* password input */}
      <div className="w-[70%] mt-3">
        <BasicInput
          label="パスワード"
          type="password"
          onChange={handlePasswordChange}
        />
      </div>

      {/* password forget */}
      <div
        className="w-[70%] text-xs text-right text-indigo-500 
      cursor-pointer hover:underline"
      >
        パスワードを忘れた方
      </div>

      {/* border */}
      <div className="w-[70%] h-[1px] bg-zinc-500 my-6"></div>

      {/* stay login */}
      <div className="text-xs flex space-x-1 my-2">
        <div>ログインのままにする</div>

        <BasicCheckBox onClick={handleStayLoginClick} checked={isStayLogin} />
      </div>

      {/* login button */}
      <div className="w-[70%] my-2">
        <BasicButton label="ログイン" onClick={handleLogin} />
      </div>

      {/* read content */}
      <div className="text-xs text-indigo-500 hover:underline mt-8 mb-12 cursor-pointer">
        必ずお読みください
      </div>
    </div>
  );
}

export default LoginForm;
