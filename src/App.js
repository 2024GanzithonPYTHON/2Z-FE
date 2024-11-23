import logo from './logo.svg';
import './App.css';
import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import Test from './pages/Test';
import Chat from './pages/Chat';

import Main from './pages/Main';
import Goal from './pages/Goal';
import MyPage from './pages/MyPage';



function App() {
  

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/goal' element={<Goal/>}></Route>
        <Route path="/" element={<StartScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
