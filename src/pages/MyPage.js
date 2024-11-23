import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyPage.css";
import axios from "axios";
import mypageimg from "../assets/mypage.png";

function MyPage() {
    const nickname = "닉네임"; // 사용자 닉네임 예시
    const chatId = 12345; // 예시 채팅 ID
    const answer = "추천 음식은 초코라떼입니다."; // 예시 AI 답변
    const choices = ["딸기라떼", "초코라떼"]; // 예시 선택지
    const [slides, setSlides] = useState([]); // 슬라이드 데이터 상태
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const navigate = useNavigate();

    useEffect(() => {
      // 데이터 가져오기
      const fetchSlides = async () => {
        try {
          const response = await axios.get("https://your-api-url.com/slides");
          setSlides(response.data); // 받아온 데이터를 슬라이드 상태로 설정
          setLoading(false); // 로딩 완료
        } catch (err) {
          setError("데이터를 가져오는 데 실패했습니다.");
          setLoading(false);
        }
      };
  
      fetchSlides();
    }, []);
  
    const handlePrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    if (loading) {
      return <div className="loading">로딩 중...</div>; // 로딩 중 메시지
    }
  
    if (error) {
      return <div className="error-message">{error}</div>; // 에러 메시지
    }

  
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
        <div className="slider">
          <button className="slider-button prev" onClick={handlePrevSlide}>
            {"<"}
          </button>
          <div className="slider-content">
            <h4 className="item-title">{slides[currentIndex].title}</h4>
            <p className="item-description">{slides[currentIndex].description}</p>
          </div>
          <button className="slider-button next" onClick={handleNextSlide}>
            {">"}
          </button>
        </div>

        {/* 페이지 표시용 점 */}
        <div className="pagination-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      {/* StartScreen.js 페이지로 이동하는 버튼 */}
      <div className="restart-section">
        <button
          className="restart-button"
          onClick={() => navigate("/start-screen")}
        >
          성향테스트 다시 해보기
        </button>
      </div>
    </div>
  );
}

export default MyPage;

