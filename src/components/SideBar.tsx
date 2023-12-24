import * as React from "react";
import { Component, useState } from "react";
import SideBarOption from "./SideBarOption";
const array = [
  { lable: "商品提案", imgURL: "/clips.svg" },
  { lable: "商品管理", imgURL: "/comment.svg" },
  { lable: "商品カテゴリ", imgURL: "/document.svg" },
];
function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0); // バーの位置を管理するための状態

  React.useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);
  return (
    <>
      {/* サイドバーの内容 */}
      <div className="bg-mainTheme min-w-full  h-full flex flex-col items-center relative">
        <div
          className="absolute h-14 w-1/8 bg-white left-0 top-[10px] transition-all duration-300 rounded-[1px] select-none"
          style={{ top: `calc(35px + ${activeIndex * 90}px)` }}
        ></div>
        {array.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="mt-10 select-none cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <SideBarOption
                  lable={element.lable}
                  imgURL={element.imgURL}
                ></SideBarOption>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default SideBar;
