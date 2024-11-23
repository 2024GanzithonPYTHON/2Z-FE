import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginScreen.css";
import backArrow from "../assets/backarrow.png";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 기본 동작 막기
    setError(null); // 에러 초기화

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { message, nickname } = response.data;
      alert(`안녕하세요, ${nickname}님!`);
      navigate("/dashboard"); // 성공 시 대시보드로 이동
    } catch (err) {
      const errorMessage = err.response?.data?.message || "로그인 실패";
      setError(errorMessage); // 에러 상태 업데이트
    }
  };

  return (
    <div className="login-screen">
      {/* 상단 네비게이션 */}
      <div className="header">
        <Link to="/">
          <img src={backArrow} alt="Back" className="back-arrow" />
        </Link>
        <h2 className="header-title">로그인</h2>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="email"
               placeholder="이메일" 
               className="input-field" 
               value={email} 
              onChange={(e) => setEmail(e.target.value)} 
         />
        <input type="password" 
               placeholder="비밀번호" 
               className="input-field"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
                />
        <button type="submit" className="submit-button">로그인하기</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default LoginScreen;
