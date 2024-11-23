import React from "react";
import { Link } from "react-router-dom";
import "../styles/StartScreen.css";
import logo from "../assets/logo.png";
import title from "../assets/title.png";

function StartScreen() {
  return (
    <div className="start-screen">
      <div className="welcome-container">
        <img src={logo} alt="Animal" className="welcome-image" />
        <img src={title} alt="Title" className="title-image" />
        {/* <h2>환영합니다 </h2> */}
        {/* <h2>물어바라 입니다</h2> */}
        <p>결정을 대신 해드릴게요! 모든 물어보세요!</p>
      </div>
      <div className="button-container">
        <Link to="/login" className="button login-button">로그인</Link>
        <Link to="/signup" className="button signup-button">회원가입</Link>
        
//         <Link to="/mypage" className="button signup-button">마이페이지</Link>
      </div>
    </div>
  );
}

export default StartScreen;
