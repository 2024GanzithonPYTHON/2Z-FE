import React from "react";
import "../styles/MyPage.css";
import mypageimg from "../assets/mypage.png";

function MyPage() {
  const nickname = "닉네임"; // 사용자 닉네임 예시

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

export default MyPage;
