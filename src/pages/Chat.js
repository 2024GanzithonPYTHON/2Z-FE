import React, { useState } from 'react'
import { styled } from 'styled-components';
import ChatContents from '../components/ChatContents';
import Choice from '../components/Choice';
import back_arrow from '../assets/arrow_back.png'
import Header from '../components/Header';
import TabBar from '../components/TabBar';

const Chat = () => {
  const [myChat, setMyChat] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  return (
    <ChatBody>
      <Header/>
      <ChatContents myChat={myChat} setMyChat={setMyChat} aiResponse={aiResponse} setAiResponse={setAiResponse}></ChatContents>
      <Choice myChat={myChat} setMyChat={setMyChat} aiResponse={aiResponse} setAiResponse={setAiResponse}/>
      <TabBar/>
    </ChatBody>
  )
}

export default Chat;

const ChatBody = styled.div`
  max-width:393px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`






const ChatTitle = styled.p`
  flex-grow:1;
  font-weight:800;
  font-size:20px;
`



