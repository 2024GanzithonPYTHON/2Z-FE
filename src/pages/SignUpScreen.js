import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignUpScreen.css";
import backArrow from "../assets/backarrow.png";

function SignUpScreen() {
  return (
    <div className="signup-screen">
      {/* 상단 네비게이션 */}
      <div className="header">
        <Link to="/">
          <img src={backArrow} alt="Back" className="back-arrow" />
        </Link>
        <h2 className="header-title">회원가입</h2>
      </div>

      {/* 회원가입 폼 */}
      <form className="signup-form">
        <input type="email" placeholder="이메일" className="input-field" />
        <input type="password" placeholder="비밀번호" className="input-field" />
        <input type="password" placeholder="비밀번호 확인" className="input-field"/>
        <button type="submit" className="submit-button"> 완료 </button>
      </form>
    </div>
  );
}

export default SignUpScreen;
