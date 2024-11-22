import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUpScreen.css";
import backArrow from "../assets/backarrow.png";

function SignUpScreen() {
  const [email, setEmail] = useState(""); // 이메일 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 상태
  const [error, setError] = useState(null); // 에러 메시지
  const navigate = useNavigate(); // 페이지 이동 hook

  const handleSignUp = async (e) => {
    e.preventDefault(); // 폼 기본 동작 방지
    setError(null); // 에러 초기화

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("https://your-api-url.com/users/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          nickname,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData["error-message"] || "회원가입 실패");
      }

      const data = await response.json(); // 성공 데이터 처리
      alert(`${data.nickname}님, 회원가입이 완료되었습니다!`);
      navigate("/login"); // 성공 시 로그인 화면으로 이동
    } catch (err) {
      setError(err.message); // 에러 상태 업데이트
    }
  };

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
      <form className="signup-form" onSubmit={handleSignUp}>
        <input type="email" 
               placeholder="이메일" 
               className="input-field"
               value={email}
               onChange={(e) => setEmail(e.target.value)} 
        />
        <input type="password" 
               placeholder="비밀번호" 
               className="input-field"
               value={nickname}
               onChange={(e) => setNickname(e.target.value)}
        />
        <input type="password" 
               placeholder="비밀번호 확인" 
               className="input-field"
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="submit-button"> 완료 </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default SignUpScreen;
