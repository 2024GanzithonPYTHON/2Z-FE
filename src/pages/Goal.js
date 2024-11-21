import React, { useState } from 'react'
import { styled } from 'styled-components';
import Header from '../components/Header';
import character_img from '../assets/character.png'
import TabBar from '../components/TabBar';
import { Toggle } from '../components/ToggleButton';
import GoalEl from '../components/GoalEl';

const Goal = () => {
  const [isUpdate, setIsUpdate] = useState(false)
  const category = ["건강 / 식습관", "생활패턴 / 라이프스타일", "환경 보호", "자기 관리 / 개발목표", "시간 관리", "예산 / 재정 관리" , "관계 / 사회적", "취미 / 여가"]

  return (
    <GoalBody>
      <Header/>
      
      {isUpdate ?
      <>
      <IntroBody>
        <IntroSpeechBubble>나만의 목표를 선택해봐!<br/>여러개를 선택할 수 있어<br/>마음껏 골라봐!</IntroSpeechBubble>
        <CharacterImg src={character_img}/>
      </IntroBody>
      <GoalListBody>
        <div style={{overflow:"scroll"}}>
          {category.map((el, index) => {
            return(
            <GoalEl title={el} index={index}></GoalEl>
            )
          })}
        </div>
      </GoalListBody>
      <SaveButton onClick={() => setIsUpdate(false)}>저장하기</SaveButton>
      </>
      :
      <>
      <IntroBody>
        <IntroSpeechBubble>내가 선택한 목표목록이야<br/>버튼으로 한번에 <br/>활성/비활성화 할수있어!</IntroSpeechBubble>
        <CharacterImg src={character_img}/>
      </IntroBody>
      <MyGoalBody>
        <ToggleBody>
          <Toggle/>
        </ToggleBody>
        
      </MyGoalBody>
      <UpdateButton onClick={() => setIsUpdate(true)}>수정하기</UpdateButton>
      </>
      }
      <TabBar/>
    </GoalBody>
    
  )
}

export default Goal;

const GoalBody = styled.div`

`

const IntroBody = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:50px;
  
`

const IntroSpeechBubble = styled.div`
position: relative;
background: #f0f0f0;
border-radius: 40px;
padding: 20px;
max-width: 200px;
height:70px;
color: #333;
flex-grow:1;
display:flex;
justify-content:center;
align-items:center;
font-weight:700;
top:-30px;
left:20px;

/* 말풍선 꼬리 */
&::after {
  content: "";
  position: absolute;
  top: 50%; /* 중앙 정렬 */
  transform: translateY(-50%); /* 세로 중앙에 맞추기 */
  right: -10px; /* 말풍선의 오른쪽 바깥으로 이동 */
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 10px; /* 삼각형 꼬리 크기 조정 */
  border-color: transparent transparent transparent #f0f0f0; /* 꼬리 색상 */
}
`

const CharacterImg = styled.img`
  width:160px;
  height:200px;
  z-index:9;
  
`

const MyGoalBody = styled.div`
  width:95%;
  height:400px;
  background:#f4f4f4;
  border-radius:45px;
  position:relative;
  top:-185px;
`


const UpdateButton = styled.button`
  width:130px;
  height: 60px;
  border:none;
  border-radius:30px;
  background-color:rgba(247, 228, 143, .7);
  margin:-25px 0;
  position:relative;
  top:-140px;
  font-weight:900;
  font-size:20px;
`

const ToggleBody = styled.div`
  position:relative;
  top:20px;
  left:100px;
`

const GoalListBody = styled.div`
  height:500px;
  overflow:scroll;
  background:#f4f4f4;
  border-radius:45px;
  position:relative;
  top:-60px;
  padding:30px;
`

const SaveButton = styled.button`
  width:130px;
  height: 60px;
  border:none;
  border-radius:30px;
  background-color:rgba(247, 228, 143, .7);
  margin:-25px 0;
  position:relative;
  top:-20px;
  font-weight:900;
  font-size:20px;
`