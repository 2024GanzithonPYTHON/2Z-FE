import React, { useState } from 'react'
import { styled } from 'styled-components';
import TestContents from '../components/TestContents';
import { Link } from 'react-router-dom';
import back_arrow from '../assets/arrow_back.png'

import useUserStore from '../store/user';
import axios from 'axios';

const Test = () => {
  const [next, setNext] = useState(false);
  const userId = useUserStore((state) => state.userId);
  const [testResult, setTestResult] = useState({
    "extroversion": null,
    "decision": null,
    "risk": null,
    "comfort": null,
    "time": null,
    "social": null,
    "budget": null,
    });
  const [testValue, setTestValue] = useState("");
  const title_1 = ["새로운 사람을 만나는 것이 좋다", "결정을 내릴 때 빠르게 판단하는 편이다", "새로운 경험을 시도하는 것을 좋아한다", "편안함이 보장된 선택을 선호한다", ]
  const title_2 = ["여유로운 계획보다는 빠르게 움직이는 것을 선호한다", "다른 사람들과 함께하는 활동이 좋다", `어떠한 결정을 할 때 가격이 합리적인지 먼저 고려하는 편이다`]

  async function handleSubmit(){
    try {
      const response = await axios.post("http://49.50.163.226:8080/tests/initial",{
        "userId":userId,
        "testResults":testResult
        
      }, {
        headers:{
          "Content-Type": "application/json"
        }
      })
      console.log(response)
    
    } catch (error) {
      console.log(testResult)
      console.log(userId)
      
    }
  }

  return (
    
    <TestBody>
      <TestHeader>
        { next ?
        <TestBackButton onClick={() => {setNext(false)}}>
          <img src={back_arrow} style={{width:'25px', height:'25px'}}/>
        </TestBackButton>
        :
        <></>
        }
        <TestTitle>성향 테스트</TestTitle>
      </TestHeader>
      {
      next ? 
      <>
        {title_2.map((el, index) => {
          return(<TestContents title={el} testValue={testValue} setTestValue = {setTestValue} index={index+4} setTestResult={setTestResult} testResult={testResult} next={next}></TestContents>)
        })}
        <Link to="/">
          <TestButton onClick={handleSubmit}>제출하기</TestButton>
        </Link>
      
      </>
      :
      <>
      {title_1.map((el, index) => {
        // setTestResult((prev) => prev[index] = testValue)
        console.log(testValue);

        return(<TestContents title={el} testValue={testValue} setTestValue = {setTestValue} index={index} setTestResult={setTestResult} testResult={testResult} next={next}></TestContents>)
      })}
      <TestNextButton onClick={() => {setNext(true)}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward" />
        <span class="material-symbols-outlined">
          arrow_forward
        </span>
        
      </TestNextButton>
      </>
      }
      
    </TestBody>
  )
}

export default Test;


const TestBody = styled.div`
  background-color:#fff;
  word-break:break-all;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const TestHeader = styled.div`
  display:flex;
  justify-content:center;
  width:393px;
  position:relative;

`

const TestTitle = styled.div`
  font-weight: 800;
  font-size:24px;
  margin-top:20px;
  margin-botton:50px;
`

const TestNextButton = styled.button`
  background:none;
  border:none;
  width:33px;
  margin:20px;
  position:relative;
  right:-150px;
`

const TestBackButton = styled.button`
  border:none;
  background:none;
  position:absolute;
  left:20px;
  top:23px;
`

const TestButton = styled.button`
  width: 235px;
  height: 49px;
  padding: 16px;
  border-radius: 20px;
  background: #F7C7A7;
  border:none;
  color:#fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
  margin-top:40px;
  &:hover{
    background:rgba(247, 199, 167, .7);
  }

`