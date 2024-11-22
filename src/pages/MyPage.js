import React from "react";
import "../styles/MyPage.css";
import axios from "axios";
import mypageimg from "../assets/mypage.png";

function MyPage() {
  function MyPage() {
    const nickname = "닉네임"; // 사용자 닉네임 예시
    const chatId = 12345; // 예시 채팅 ID
    const answer = "추천 음식은 초코라떼입니다."; // 예시 AI 답변
    const choices = ["딸기라떼", "초코라떼"]; // 예시 선택지
  
    // 하트 보관함에 저장하는 함수
    const saveToHeart = async () => {
      const token = "your_jwt_token"; // JWT 토큰 설정
  
      const data = {
        nickname: nickname,
        chat_id: chatId,
        answer: answer,
        choices: choices,
      };
  
      try {
        const response = await axios.post(
          "https://your-api-url.com/hearts/save",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("저장 성공:", response.data);
        alert("하트 보관함에 저장되었습니다!");
      } catch (error) {
        console.error("저장 실패:", error.response?.data || error.message);
        alert("저장 중 문제가 발생했습니다.");
      }
    };

  return (
    <div className="my-page">
      {/* 상단 네비게이션 바 */}
      <div className="navbar">
        <div className="status-icons">
          <span className="signal"></span>
          <span className="wifi"></span>
          <span className="battery"></span>
        </div>
      </div>

      {/* 사용자 정보 */}
      <div className="profile-section">
        <div className="profile-image">
          <img src={mypageimg} alt="mypageimage" className="mypage-image"
          />
        </div>
        <h2 className="welcome-message">{nickname}님 안녕하세요!</h2>
      </div>

      {/* 보관함 섹션 */}
      <div className="favorites-section">
        <h3 className="favorites-title">❤️ 보관함</h3>
        <div className="favorites-item">
          <h4 className="item-title">딸기라떼 vs 초코라떼</h4>
          <p className="item-description">
            비오는 날 딸기와 초코의 조화는 환상적입니다. <br />
            설렘을 원하는 분께 강력히 추천합니다. <br />
            초코라떼는 안정감을 줄 수 있는 선택입니다.
          </p>
          {/* 페이지 표시용 점 */}
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        </div>
        
      </div>
    </div>
  );
}
}
export default MyPage;
