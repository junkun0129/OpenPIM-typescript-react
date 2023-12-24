import * as React from "react";
import { Component } from "react";
import mockSeriesData from "../mockData/mockSeries";
function Table() {
  return (
    <>
      <div className="min-w-full h-[100%] shadow-md rounded-lg">
        <div className="bg-white h-[10%] w-full flex justify-around items-center">
          <div className="flex shadow-sm">
            <input
              type="text"
              className="border border-mainTheme rounded-r-[0px] rounded-l-[4px]"
            />
            <button className="bg-mainTheme text-white text-xs p-2 rounded-r-[4px] rounded-l-[0px] flex border border-mainTheme">
              フィルター
              <img src="/filter.svg" alt="" className=" ml-2 pt-[1px]" />
            </button>
          </div>
          <div></div>
        </div>
        <div className="w-full h-[90%] overflow-scroll">
          <table className="w-full h-[90%]">
            {/* ...テーブルのヘッダー */}
            <thead>
              <tr className="text-left shadow-lg">
                <th className="p-2 w-1/6 border border-white">チェック</th>
                <th className="p-2 w-1/6 border border-white">商品コード</th>
                <th className="p-2 w-1/6 border border-white">画像</th>
                <th className="p-2 w-1/6 border border-white">シリーズ</th>
                <th className="p-2 w-1/6 border border-white">カテゴリ</th>
                <th className="p-2 w-1/6 border border-white">ステータス</th>
              </tr>
            </thead>
            {/* ...テーブルのボディ */}
            <tbody className="bg-white">
              {mockSeriesData.map((data, index) => (
                <tr key={index} className="border border-b-1">
                  <td className="p-2">チェック</td>
                  <td className="p-2">{data.productcode}</td>
                  <td className="p-2">{data.imgUrl}</td>
                  <td className="p-2">{data.seriesName}</td>
                  <td className="p-2">{data.category}</td>
                  <td className="p-2">{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
