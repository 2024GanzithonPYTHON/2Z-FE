import React, { useState } from 'react'
import { styled } from 'styled-components';
import TestContents from '../components/TestContents';


const Test = () => {
  const [next, setNext] = useState(false);
  const title_1 = ["새로운 사람을 만나는 것이 좋다", "결정을 내릴 때 빠르게 판단하는 편이다", "새로운 경험을 시도하는 것을 좋아한다", "편안함이 보장된 선택을 선호한다", ]
  const title_2 = ["여유로운 계획보다는 빠르게 움직이는 것을 선호한다", "다른 사람들과 함께하는 활동이 좋다", `어떠한 결정을 할 때 가격이 합리적인지먼저 고려하는 편이다`]

  return (
    
    <TestBody>
      <TestTitle>성향 테스트</TestTitle>
      {
      next ? 
      <>
        {title_2.map((el) => {
          return(<TestContents title={el}></TestContents>)
        })}
        <TestButton >제출하기</TestButton>
      
      </>
      :
      <>
      {title_1.map((el) => {
        return(<TestContents title={el}></TestContents>)
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
  
`

const TestTitle = styled.div`
  font-weight: 800;
  font-size:24px;
  margin-top:40px;
  margin-botton:50px;
`

const TestNextButton = styled.button`
  background:none;
  border:none;
  
  margin:20px;

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