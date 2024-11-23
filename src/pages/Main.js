import React from 'react'
import { styled } from 'styled-components'
import TabBar from '../components/TabBar'
import banner_img from '../assets/banner_img.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <MainBody>
      <BannerBody>
        <BannerImg src={banner_img}/>
      </BannerBody>
      <MainContentsBody>
        <MainTitle>당신의 결정,<br/>
        <div style={{display:'flex', justifyContent:'center'}}><div style={{color:"rgba(204, 179, 157, 1)"}}>물어바라</div> 가 도와줄게요</div>
        </MainTitle>
        <MainText>?_?</MainText>
        <Link to='/chat'>
          <GotoChat>결정하러 가기</GotoChat>
        </Link>
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
  color:#4c4c4c;
  max-width:393px;
  overflow:hidden;
`

const BannerBody = styled.div`
  width:450px;
  height:227px;
  background:rgba(247, 228, 143, 1);
  margin-top:20px;
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  text-align:center;
  
`

const BannerImg = styled.img`
  width:450px;
  height:300px;
`

const MainContentsBody = styled.div`
  width:393px;
  height:750px;
  border-radius: 77px;
  border: 1px solid #745353;
  background: #FFF;
  margin-top:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

`

const MainTitle = styled.p`
  margin-top:-200px;
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

