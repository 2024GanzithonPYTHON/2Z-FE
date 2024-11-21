import React from 'react'
import { styled } from 'styled-components'
import character from '../assets/character.png';
import SpeechBubble from './SpeechBubble';

const ChatContents = () => {
  return (
    <ChatContentsBody>
      <BaraProfile>
        <BaraProfileContents>
          <BaraProfileImg src={character}></BaraProfileImg>
        </BaraProfileContents>
        <p style={{fontWeight:'600', fontSize:'13px'}}>물어바라</p>
      </BaraProfile>
      <SpeechBubble text={"안녕하세요 당신의 결정을 도울 물어바라입니다 만나서 반가워요!"} isHeart={true}></SpeechBubble>
      <SpeechBubble text={"채팅창에는 현재 상황이나 상태와 관련된 변수를, 네모 빈칸에는 고민되는 항목을 입력해주세요!"} isHeart={false}/>
  
    </ChatContentsBody>
  )
}

export default ChatContents

const ChatContentsBody = styled.div`
  width:90%;
  margin:auto;
  min-height:600px;
`

const BaraProfile = styled.div`
  display:flex;
  gap:10px;
  align-items:center;
`

const BaraProfileContents = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:#F7C7A7;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`

const BaraProfileImg = styled.img`
  position:relative;
  top:10px;
  width:90px;
  height:90px;
  right:2px;
`


const SpeechBubbleHeart = styled.div`

`

const HeartIcon = styled.button`

`