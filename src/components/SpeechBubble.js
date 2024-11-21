import React from 'react'
import { styled } from 'styled-components'
import heart_icon from '../assets/heart_icon.png'

const SpeechBubble = ({text, isHeart}) => {
  return (
    <>
      <SpeechBubbleContents>{text}
      {isHeart ? <HeartIcon src={heart_icon}/> : <></>}
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
  font-weight:500;
  margin-bottom:15px;
  box-sizing:border-box;
  text-align:start;
`

const HeartIcon = styled.img`
  width:18px;
  height:18px;
  position:relative;
  top:-18px;
  left:7px;
`