import React from 'react'
import { styled } from 'styled-components';
import ChatContents from '../components/ChatContents';
import Choice from '../components/Choice';
import back_arrow from '../assets/arrow_back.png'
import Header from '../components/Header';
import TabBar from '../components/TabBar';

const Chat = () => {
  return (
    <ChatBody>
      <Header/>
      <ChatContents></ChatContents>
      <Choice/>
      <TabBar/>
    </ChatBody>
  )
}

export default Chat;

const ChatBody = styled.div`
`






const ChatTitle = styled.p`
  flex-grow:1;
  font-weight:800;
  font-size:20px;
`



