import React from 'react'
import { styled } from 'styled-components'

const GoalEl = ({title, index}) => {
  const health = ["비건", "페스코", "저당식이", "고단백식이", "다이어트", "체중유지"];
  const life_style = ["야행성", "아침형 인간", "여행 지향", "주말 활동형"];
  const eco = ["지속 가능성", "저탄소 생활", "제로 웨이스트", "친환경 제품"];
  const self_improvment = ["독서 목표", "자기계발", "운동 목표"];
  const time_save = ["시간 절약", "마감 준수", "멀티 태스킹"];
  const money_save = ["절약 모드", "평소 지출", "가성비 지향"];
  const social = ["가족 지향", "친구 지향", "네트워킹", "혼자 활동"];
  const spare_time = ["운동 취미", "예술 취미", "게임 선호", "음악 감상"]

  const render = (index) => {
    switch (index) {
      case 0:
        return health.map((el) => <ElBody>{el}</ElBody>)
      case 1:
        return life_style.map((el) => <ElBody>{el}</ElBody>)
      case 2:
        return eco.map((el) => <ElBody>{el}</ElBody>)
      case 3:
        return self_improvment.map((el) => <ElBody>{el}</ElBody>)
      case 4:
        return time_save.map((el) => <ElBody>{el}</ElBody>)
      case 5:
        return money_save.map((el) => <ElBody>{el}</ElBody>)
      case 6:
        return social.map((el) => <ElBody>{el}</ElBody>)
      case 7:
        return spare_time.map((el) => <ElBody>{el}</ElBody>)
      default:
        break;
    }
  }

  return (
    <CategoryBody>
      <CategoryTitle>{title}</CategoryTitle>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      {
       render(index) 
      }
      </div>
      
    </CategoryBody>
  )
}

export default GoalEl

const CategoryBody = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin-bottom:30px;
`

const CategoryTitle = styled.div`
  font-size:18px;
  font-weight:700;
  text-align:start;
  margin-bottom:5px;
`

const ElBody = styled.div`
  background-color:white;
  width:auto;
  height:35px;
  padding: 0 10px;
  margin: 5px 7px;
  border-radius:15px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:rgba(116, 83, 83, 1);

  &:hover{
    background-color:rgba(247, 228, 143, .7);
  }
`