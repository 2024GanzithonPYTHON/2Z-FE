import React, { useState } from 'react'
import { styled } from 'styled-components';
import Header from '../components/Header';
import character_img from '../assets/character.png'
import TabBar from '../components/TabBar';
import { Toggle } from '../components/ToggleButton';
import GoalEl from '../components/GoalEl';
import axios from '../api/baseURL';

const Goal = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [goalValue, setGoalValue] = useState([]);
  const [updatedGoalValue, setUpdatedGoalValue] = useState([]);
  const category = ["건강 / 식습관", "생활패턴 / 라이프스타일", "환경 보호", "자기 관리 / 개발목표", "시간 관리", "예산 / 재정 관리" , "관계 / 사회적", "취미 / 여가"]
  const [selectedIndex, setSelectedIndex] = useState(Array(31).fill(false))


  async function handleGoalSubmit(){
    try {
      setIsUpdate(false);
      const response = await axios.post('/goals/update',{
        "userId":"",
        "goals": goalValue
      },{
        headers:{
          Authorization:""
        }
      })
      console.log(response)
      const data = response
      setUpdatedGoalValue(data)
    } catch (error) {
      console.log(error)
      console.log(updatedGoalValue);
    }
  } 

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
            <GoalEl title={el} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} goalValue={goalValue} setGoalValue={setGoalValue}></GoalEl>
            )
          })}
        </div>
      </GoalListBody>
      <SaveButton onClick={handleGoalSubmit}>저장하기</SaveButton>
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
        <div style={{overflowY:"scroll", overflowX:"hidden", marginTop:"-130px", marginLeft:"20px"}}>
          {category.map((el, index) => {
            return(
            <GoalEl title={el} index={index} updatedGoalValue={["비건", "페스코", "독서 목표"]} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></GoalEl>
            )
          })}
        </div>
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
  width:393px;
  
`

const IntroBody = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;
  
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
left:25px;

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
  width:90%;
  height:400px;
  background:#f4f4f4;
  border-radius:45px;
  position:relative;
  top:-55px;
  padding:20px;
  box-sizing:border-box;
  overflow-y:scroll;
  overflow-x:hidden;
  margin:auto;
  
`


const UpdateButton = styled.button`
  width:130px;
  height: 60px;
  border:none;
  border-radius:30px;
  background-color:rgba(247, 228, 143, .7);
  display:block;
  margin:auto;
  position:relative;
  top:-20px;

  font-weight:900;
  font-size:20px;
  color:#333;
  
`

const ToggleBody = styled.div`
  position:relative;
  top:-120px;
  left:100px;
`

const GoalListBody = styled.div`
  height:400px;
  overflow:scroll;
  background:#f4f4f4;
  border-radius:45px;
  position:relative;
  top:-60px;
  padding:30px;
  box-sizing:border-box;
  margin:auto;
  width:90%;
`

const SaveButton = styled.button`
  width:130px;
  height: 60px;
  border:none;
  border-radius:30px;
  background-color:rgba(247, 228, 143, .7);
  // margin:-25px 0;
  position:relative;
  top:-20px;
  font-weight:900;
  font-size:20px;
  z-index:2;
  color:#333;
  margin: auto;
  display:block;
`
