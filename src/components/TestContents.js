import React from 'react'
import { styled } from 'styled-components';

const TestContents = ({title}) => {
  return (
    <TestContentsBody>
      <ContentsTitle>{title}</ContentsTitle>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Yes>그렇다</Yes>
        <BigButton></BigButton>
        <SmallButton></SmallButton>
        <SmallButton/>
        <BigButton/>
        <No>아니다</No>
      </div>
      <DottedLine>
        - - - - - - - - - - - - - - - - - -
      </DottedLine>
    </TestContentsBody>
  )
}

export default TestContents;

const TestContentsBody = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center:center;
`

const ContentsTitle = styled.p`
  font-weight:600;
  font-size:17px;
  padding:20px 0;
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
  margin-top:30px;
  font-weight:800;
  font-size:30px;
  color:#CED3DE;
`