import * as React from "react";
import { Component } from "react";
function SideBar() {
  return (
    <>
      <div className="bg-gray-200 w-1/8 h-full fixed top-0 left-0">
        {/* サイドバーの内容 */}
        <h2 className="text-lg font-semibold">サイドバー</h2>
        {/* 他のコンポーネントやリンクなど */}
      </div>
    </>
  );
}

export default SideBar;
