import React from 'react'
import { styled } from 'styled-components'
import TabBar from '../components/TabBar'
import banner_img from '../assets/banner_img.png'

const Main = () => {
  return (
    <MainBody>
      <BannerBody>
        <BannerImg src={banner_img}/>
      </BannerBody>
      <MainContentsBody>
        <MainTitle>당신의 결정,<br/> 물어바라가 도와줄게요</MainTitle>
        <MainText>?_?</MainText>
        <GotoChat>결정하러 가기</GotoChat>
      </MainContentsBody>
      <TabBar/>
    </MainBody>
  )
}

export default Main

const MainBody = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const BannerBody = styled.div`
  width:auto;
  height:227px;
  background:rgba(247, 228, 143, 1);
  margin-top:50px;
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`

const BannerImg = styled.img`
  width:490px;
  height:250px;
`

const MainContentsBody = styled.div`
  width:359px;
  height:550px;
  border-radius: 77px;
  border: 1px solid #745353;
  background: #FFF;
  margin-top:50px;

`

const MainTitle = styled.p`
  margin-top:80px;
  font-size:30px;
  font-weight:800;
`

const MainText = styled.p`
  color:grey;
`

const GotoChat = styled.button`
  border-radius:50px;
  width:300px;
  height: 60px;
  border:none;
  background:#CCB39D;
  font-size:20px;
  color:#fff;
  font-weight:700;
`

