import React from 'react'
import { styled } from 'styled-components'
import heart_icon from '../assets/heart_icon.png'
import empty_heart from '../assets/empty_heart.png'
import axios from '../api/baseURL'
import useUserStore from '../store/user'

const SpeechBubble = ({text, isHeart, setIsHeart, noHeart, setNoHeart, choices, setChoices, setting, setSetting, gptAnswer}) => {
  const userId = useUserStore((state) => state.userId);

  
  async function handleHeartClick(){
    try {
      const response = axios.post("/hearts",{
        "nickname":userId,
        "setting":setting,
        "choice":choices,
        "gptAnswer":[gptAnswer]
      },{
        headers:{
  
        }
      })
      setIsHeart(prev => !prev)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
      <SpeechBubbleContents>{text}
      {noHeart ?
      <></>
      :
      isHeart ? <HeartIcon src={heart_icon} onClick={handleHeartClick}/> : <><EmptyHeartIcon src={empty_heart} onClick={handleHeartClick}/></>}
      
      </SpeechBubbleContents>
      
    </>
  )
}

export default SpeechBubble

const SpeechBubbleContents = styled.div`
  width:240px;
  height:auto;
  background-color:rgba(247, 228, 143, .7);
  border-radius:15px;
  font-size:14px;
  margin-left:40px;
  padding:10px 20px;
  font-weight:600;
  margin-bottom:15px;
  box-sizing:border-box;
  text-align:start;
  color:#333;
  position:relative;
`

const HeartIcon = styled.img`
  width:18px;
  height:18px;
  position:absolute;
  top:10px;
  right:15px;
`

const EmptyHeartIcon = styled.img`
  width:21px;
  height:22px;
  position:absolute;
  top:10px;
  right:12px;
`