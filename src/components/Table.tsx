import * as React from "react";
import { Component } from "react";
import mockSeriesData from "../mockData/mockSeries";
function Table() {
  return (
    <>
      <div style={{ maxHeight: "400px", overflowX: "auto" }}>
        <table className="min-w-full border-collapse border border-gray-300">
          {/* ...テーブルのヘッダー */}
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 w-1/6">チェック</th>
              <th className="p-2 w-1/6">商品コード</th>
              <th className="p-2 w-1/6">画像</th>
              <th className="p-2 w-1/6">シリーズ</th>
              <th className="p-2 w-1/6">カテゴリ</th>
              <th className="p-2 w-1/6">ステータス</th>
            </tr>
          </thead>
          {/* ...テーブルのボディ */}
          <tbody>
            {mockSeriesData.map((data, index) => (
              <tr key={index}>
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
    </>
  );
}

export default Table;
