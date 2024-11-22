import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      // API 요청
      const response = await fetch("https://your-api-url.com/users/login", {
        method: "POST", // 명세서에서 지정된 HTTP 메서드
        headers: {
          "Content-Type": "application/json", // JSON 데이터 전달
        },
        body: JSON.stringify({email, password}),
      });

      if (!response.ok) {
        // 실패 응답 처리
        const errorData = await response.json();
        throw new Error(errorData.message || "로그인 실패");
      }

      const data = await response.json(); // 성공 응답 데이터
      console.log("로그인 성공:", data);

      // 성공 처리: 예) 토큰 저장, 리다이렉트
      alert(`안녕하세요, ${data.nickname}님!`);
      navigate("/dashboard"); // 대시보드로 이동
    } catch (err) {
      setError(err.message); // 에러 상태 업데이트
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
