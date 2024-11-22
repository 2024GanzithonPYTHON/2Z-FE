import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const GoalEl = ({ title, index, updatedGoalValue }) => {
  const [health, setHealth] = useState(["비건", "페스코", "저당식이", "고단백식이", "다이어트", "체중유지"]);
  const [lifeStyle, setLifeStyle] = useState(["야행성", "아침형 인간", "여행 지향", "주말 활동형"]);
  const [eco, setEco] = useState(["지속 가능성", "저탄소 생활", "제로 웨이스트", "친환경 제품"]);
  const [selfImprovment, setSelfImprovment] = useState(["독서 목표", "자기계발", "운동 목표"]);
  const [timeSave, setTimveSave] = useState(["시간 절약", "마감 준수", "멀티 태스킹"]);
  const [moneySave, setMoneySave] = useState(["절약 모드", "평소 지출", "가성비 지향"]);
  const [social, setSocial] = useState(["가족 지향", "친구 지향", "네트워킹", "혼자 활동"]);
  const [spareTime, setSpareTime] = useState(["운동 취미", "예술 취미", "게임 선호", "음악 감상"]);
  const [selectedGoal, setSelectedGoal] = useState(false);

  useEffect(() => {
    // updatedGoalValue가 변할 때마다 해당 값을 처리
    const updateCategory = (updatedGoalValue, category, setCategory) => {
      const result = category.filter((value) => updatedGoalValue.includes(value));
      setCategory(result); // 상태를 한 번만 업데이트
    };

    if (updatedGoalValue) {
      switch (index) {
        case 0:
          updateCategory(updatedGoalValue, health, setHealth);
          break;
        case 1:
          updateCategory(updatedGoalValue, lifeStyle, setLifeStyle);
          break;
        case 2:
          updateCategory(updatedGoalValue, eco, setEco);
          break;
        case 3:
          updateCategory(updatedGoalValue, selfImprovment, setSelfImprovment);
          break;
        case 4:
          updateCategory(updatedGoalValue, timeSave, setTimveSave);
          break;
        case 5:
          updateCategory(updatedGoalValue, moneySave, setMoneySave);
          break;
        case 6:
          updateCategory(updatedGoalValue, social, setSocial);
          break;
        case 7:
          updateCategory(updatedGoalValue, spareTime, setSpareTime);
          break;
        default:
          break;
      }
    }
  }, [updatedGoalValue, index]);  // updatedGoalValue나 index가 변할 때만 실행

  const render = (index) => {
    switch (index) {
      case 0:
        return health.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue || selectedGoal ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 1:
        return lifeStyle.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 2:
        return eco.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 3:
        return selfImprovment.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 4:
        return timeSave.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 5:
        return moneySave.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 6:
        return social.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      case 7:
        return spareTime.map((el) => <ElBody key={el} style={{backgroundColor: updatedGoalValue ? "rgba(247, 228, 143, .7)" : "#fff"}}>{el}</ElBody>);
      default:
        break;
    }
  };

  return (
    <CategoryBody>
      <CategoryTitle>{title}</CategoryTitle>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {render(index)}
      </div>
    </CategoryBody>
  );
};

export default GoalEl;

const CategoryBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: start;
  margin-bottom: 5px;
`;

const ElBody = styled.div`
  background-color: white;
  width: auto;
  height: 35px;
  padding: 0 10px;
  margin: 5px 7px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(116, 83, 83, 1);
  font-weight: 700;

  &:hover {
    background-color: rgba(247, 228, 143, 0.7);
  }
`;
