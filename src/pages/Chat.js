import React, { useState } from 'react'
import { styled } from 'styled-components';
import ChatContents from '../components/ChatContents';
import Choice from '../components/Choice';
import back_arrow from '../assets/arrow_back.png'
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import useUserStore from '../store/user';

const Chat = () => {
  const [myChat, setMyChat] = useState("");
  const [isResponse, setIsResponse] = useState(false)
  const userId = useUserStore((state) => state.userId);
  const [choices, setChoices] = useState([]);
  const [setting, setSetting] = useState("");
  const [gptAnswer, setGptAnswer] = useState("");

  const [aiResponse, setAiResponse] = useState({data:{}});

  return (
    <ChatBody>
      <Header/>
      <ChatContents myChat={myChat} setMyChat={setMyChat} aiResponse={aiResponse} setAiResponse={setAiResponse} choices={choices} setChoices={setChoices} setting={setting} setSetting={setSetting} gptAnswer={gptAnswer}></ChatContents>
      <Choice myChat={myChat} setMyChat={setMyChat} aiResponse={aiResponse} setAiResponse={setAiResponse} isResponse={isResponse} setIsResponse={setIsResponse} choices={choices} setChoices={setChoices} setting={setting} setSetting={setSetting} setGptAnswer={setGptAnswer}/>
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



