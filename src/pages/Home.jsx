import React from "react";
import CoinGet from "../components/CoinGet";
import Trending from "../components/Trending";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinGet coins={coins}></CoinGet>
      <Trending></Trending>
    </div>
  );
};

export default Home;
