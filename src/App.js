import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import axios from "axios";
import CoinPage from "./pages/CoinPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ZAR&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setCoins(response.data);
      console.log(response.data);
    });
  }, [API_URL]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home coins={coins}></Home>}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/coin/:coinId" element={<CoinPage></CoinPage>}>
            <Route path=":coinId"></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
