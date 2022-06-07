import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

import CoinItem from "./CoinItem";

const CoinGet = ({ coins }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="rounded-div my-4 ">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right ">
        <h1 className="text-2xl font-bold my-2">Search Currencies</h1>
        <form>
          <input
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            name=""
            id=""
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((coin) => {
              if (search === "") {
                return coin;
              } else if (
                coin.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return coin;
              }
            })
            .map((coin) => {
              return <CoinItem coin={coin} key={coin.id}></CoinItem>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinGet;
