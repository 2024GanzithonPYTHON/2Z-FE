import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

const TestContents = ({title, testValue, setTestValue, index, setTestResult, testResult, next}) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleClick = (index, value) => {
   
    const title_list = ["extroversion", "decision", "risk", "comfort","time", "social", "budget"]
    const title = title_list[index]
    console.log(value);

    setTestResult((prevResult) => ({
      ...prevResult,
      [title]: value,// 선택된 항목 업데이트
    }))
    // setTestResult((prevResult) => {
    //   const desiredOrder = ["extroversion", "decision", "risk", "comfort", "time", "social", "budget"];
    //   const sortedResult = Object.keys(prevResult)
    //     .sort((a, b) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b))
    //     .reduce((acc, key) => {
    //       acc[key] = prevResult[key];
    //       return acc;
    //     }, {});
    //   return sortedResult;
    // });

    // setTestResult((prevResult) => {
    //   const desiredOrder = ["extroversion", "decision", "risk", "comfort", "time", "social", "budget"];
    
    //   // prevResult가 객체 형태인 경우에만 진행
    //   if (prevResult && typeof prevResult === 'object') {
    //     const sortedResult = Object.keys(prevResult)
    //       .sort((a, b) => desiredOrder.indexOf(a) - desiredOrder.indexOf(b))
    //       .reduce((acc, key) => {
    //         acc[key] = prevResult[key];
    //         return acc;
    //       }, {});
    
    //     return sortedResult;
    //   }
    
    //   return prevResult; // prevResult가 객체가 아닌 경우 그대로 반환
    // });
    
    
    setSelectedButton(value)
  };

  useEffect(() => {
    setSelectedButton(0)
  }, [next])
  

  return (
    <TestContentsBody>
      <ContentsTitle>{title}</ContentsTitle>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Yes>그렇다</Yes>

        <BigButton onClick={() => {handleClick(index,100)}} style={{backgroundColor:selectedButton===100 ? "#f7c7a7" : "#efefef"}}></BigButton>
        <SmallButton onClick={() => {handleClick(index,75)}} style={{backgroundColor:selectedButton===75 ? "#f7c7a7" : "#efefef"}}></SmallButton>
        <SmallButton onClick={() => {handleClick(index,50)}} style={{backgroundColor:selectedButton===50 ? "#f7c7a7" : "#efefef"}}/>
        <BigButton onClick={() => {handleClick(index,25)}} style={{backgroundColor:selectedButton===25 ? "#f7c7a7" : "#efefef"}}/>
        <No>아니다</No>
      </div>
      <DottedLine>
        - - - - - - - - - - - - - - - - - - - 
      </DottedLine>
    </TestContentsBody>
  )
}

export default TestContents;

const TestContentsBody = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  word-break:keep-all;
`

const ContentsTitle = styled.p`
  font-weight:600;
  font-size:17px;
  padding:20px 0;
  width:300px;
  text-align:center;
`

const Yes = styled.div`
  font-size:16px;
  font-weight:500;
`

const No = styled.div`
  font-size: 16px;
  font-weight:500;
  margin-left:26px;
`

const BigButton = styled.button`
  width:26px;
  height:26px;
  border-radius:50%;
  border:none;
  margin-left:26px;
  &:hover{
    background:#f7c7a7;
  }
  &:focus{
    background:#f7c7a7;
  }
`

const SmallButton = styled.button`
  width:20px;
  height:20px;
  border-radius:50%;
  border:none;
  margin-left:26px;
  &:hover{
    background:#f7c7a7;
  }
`

const DottedLine = styled.div`
  margin-top:15px;
  font-weight:800;
  font-size:30px;
  color:#CED3DE;
`
