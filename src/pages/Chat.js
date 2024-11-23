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

  const [aiResponse, setAiResponse] = useState({
    "statusCode": 200,
    "message": "성공적으로 추천받았습니다.",
    "data": {
	        "choice": "추천 : 유튜브보기",
        "reason": "추천 이유: 사용자는 지금 심심한 상태이며, 사회적 상호작용 선호도가 높아서 혼자 있는 것보다 다른 사람들과의 간접적인 상호작용을 선호할 가능성이 큽니다. 유튜브는 다양한 콘텐츠를 제공하여 즉각적으로 재미를 느낄 수 있으며, 동시에 다양한 주제의 비디오를 통해 새로운 정보나 트렌드를 쉽게 접할 수 있습니다. 또한 사용자는 시간 관리를 중요시하므로, 비교적 짧은 영상들을 선택하여 시간을 효율적으로 사용할 수 있습니다. 결정 스타일이 낮고 편안함을 덜 추구하며 리스크 감수 성향이 높다는 점에서 새로운 콘텐츠를 접하여 다양한 경험을 누려보는 것도 사용자의 성향에 부합합니다."
    }
});

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



