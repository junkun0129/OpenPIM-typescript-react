import * as React from "react";
import { Component } from "react";
import LoginForm from "../components/LoginForm";
function LoginPage() {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-100 relative">
        {/* title */}
        <div className="p-6 text-2xl font-bold ">OpenPIM</div>

        {/* form */}
        <div className="w-screen h-screen absolute top-0 left-0">
          <div className="w-full h-full flex justify-center items-center overflow-auto p-1">
            <div className="mx-auto max-w-lg w-full h-auto rounded-md shadow-[0px_0px_7px_2px] shadow-zinc-300 dark:shadow-zinc-600">
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="text-sm w-screen text-center absolute bottom-0 mb-5">
          OpenPIm Copyright(C)2006-2023 ProField Co.,Ltd. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default LoginPage;
