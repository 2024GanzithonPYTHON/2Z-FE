import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginScreen.css";
import backArrow from "../assets/backarrow.png";

function LoginScreen() {
  return (
    <div className="login-screen">
      {/* 상단 네비게이션 */}
      <div className="header">
        <Link to="/">
          <img src={backArrow} alt="Back" className="back-arrow" />
        </Link>
        <h2 className="header-title">로그인</h2>
      </div>
      <form className="login-form">
        <input type="email" placeholder="이메일" className="input-field" />
        <input type="password" placeholder="비밀번호" className="input-field" />
        <button type="submit" className="submit-button">로그인하기</button>
      </form>
    </div>
  );
}

export default LoginScreen;
