import React from "react";
import { Link } from "react-router-dom";
import "../styles/StartScreen.css";
import logo from "../assets/logo.png";

function StartScreen() {
  return (
    <div className="start-screen">
      <div className="welcome-container">
        <img src={logo} alt="Animal" className="welcome-image" />
        <h1>물어바라에 오신 것을</h1>
        <h1>환영합니다</h1>
        <p>결정을 대신 해드릴게요! 모든 물어보세요!</p>
      </div>
      <div className="button-container">
        <Link to="/login" className="button login-button">로그인</Link>
        <Link to="/signup" className="button signup-button">회원가입</Link>
        <Link to="/mypage" className="button signup-button">마이페이지</Link>
      </div>
    </div>
  );
}

export default StartScreen;
