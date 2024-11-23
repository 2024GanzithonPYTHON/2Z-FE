
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import useUserStore from '../store/user';
import axios from 'axios';

const Choice = ({myChat, setMyChat, aiResponse, setAiResponse, isResponse,setIsResponse, choices, setChoices, setting, setSetting, setGptAnswer}) => {
  const [itemNum, setItemNum] = useState([]);
  const [bottomStyle, setBottomStyle] = useState("-130px")
  
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [choice5, setChoice5] = useState("");
  const userId = useUserStore((state) => state.userId);

  

  const itemAdd = () => {
    console.log(itemNum)
    const newItem = `Item ${itemNum.length + 1}`;
    setItemNum([...itemNum, newItem]);
  } 
  
  async function handleChatSubmit(){
    try {
      const response = await axios.get("http://49.50.163.226:8080/recommends/request", {
        // "userId":1,
        // "setting":setting,
        // "choices":choices,
        
          "userId": 1,
          "setting": "심심해",
          "choices": ["게임(리그오브레전드)하기", "책읽기", "유튜브보기"]
      },{
        headers:{
          "Content-Type": "application/json"
        }
      }
      )
      console.log(response)
      // const data = JSON.stringify(response.data)
      // setAiResponse(data);
      setIsResponse(true);
      console.log(isResponse);
    } catch (error) {
      console.log(error);
      console.log(choices);
      console.log(setting)
    }
  }

  useEffect(() => {
    switch (itemNum.length) {
      case 1:
        setBottomStyle((prev) => prev+50);
        break;
      case 2:
        setBottomStyle((prev) => prev+50);
        break;
      case 3:
        setBottomStyle((prev) => prev+50);
        break;
      default:
        setBottomStyle("-130px"); // 기본 스타일로 되돌려놓기
        break;
    }
  }, [itemNum.length]);

  const handleChoiceChange = (e, setChoice) => {
    console.log(e.target.value)
    setChoice(e.target.value)
  }

  const handleBlur = (choice) => {
    setChoices(prev => [...prev, choice])
    console.log(choice)
  }

  const handleSettingChange = (e) => {
    console.log(e.target.value);
    setSetting(e.target.value)
    console.log(choices)
  }

  

  return (
    <>
    {isResponse ? 
      <div style={{display:'flex', flexDirection:'column', position:"relative", bottom:"-90px"}}>
      <RetryButton>다른 답변보기</RetryButton>
      <NewChoiceButton>새로운 선택</NewChoiceButton>
      </div>
    :
    <ChoiceBody>
      <><ItemChoiceBody style={{bottom:{bottomStyle}}}>
        <ItemContents value={choice1} onChange={(e) => {handleChoiceChange(e, setChoice1)}} onBlur={() => handleBlur(choice1)}></ItemContents>
        <VsText>VS</VsText>
        <ItemContents value={choice2} onChange={(e) => {handleChoiceChange(e, setChoice2)}} onBlur={() => handleBlur(choice2)}></ItemContents>
        {itemNum.map((item) => {
          return(
            <>
              <VsText>VS</VsText>
              <ItemContents value={choice3} onChange={(e) => {handleChoiceChange(e, setChoice3)}} onBlur={() => handleBlur(choice3)}></ItemContents>
            </>
          )
        })}
        <ItemPlusButton onClick={() => itemAdd()}>+</ItemPlusButton>
      </ItemChoiceBody>
      <OptionBody>
        <OptionInput placeholder='변수를 입력해주세요' value={setting} onChange={handleSettingChange}>

        </OptionInput>
        <OptionButton onClick={handleChatSubmit}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_right_alt" />
          <span class="material-symbols-outlined">
            arrow_right_alt
          </span>
        </OptionButton>
      </OptionBody>
      </>
      
      
    </ChoiceBody>}
    </>
  )
}

export default Choice

const ChoiceBody = styled.div`
  position:relative;
  width:393px;
  top:150px;
  
`

const ItemChoiceBody = styled.div`
  display:flex;
  gap:10px;
  width:393px;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  position:absolute;
  
  bottom:60px;

`

const ItemContents = styled.input`
  border-radius:15px;
  width:110px;
  height:50px;
  border:none;
  padding:15px;
  box-sizing:border-box;
  background-color:#FBE1CF;
  font-weight:800;
  font-size:16px;

  
  color:#5A5A5A;

  &:focus{
    outline:none;
  }
`

const VsText = styled.div`
  font-weight:800;
  color:grey;
`

const ItemPlusButton = styled.button`
  width:35px;
  height:35px;
  border-radius:50%;
  font-size:30px;
  font-weight:600;
  border:none;
  text-align:center;
  background:#CCB39D;
  color:#fff;
`

const OptionBody = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  // position:absolute;
  bottom:-210px;
  left: 20px;
  margin-top:10px;
  gap:10px;
`

const OptionInput = styled.input`
  border-radius:15px;
  border:none;
  background-color:#f4f4f4;
  width:280px;
  height:20px;
  padding:20px;
  box-sizing:border-box;
  font-weight:700;

  &:focus{
    outline:none;
  }
  
`

const OptionButton = styled.button`
  border-radius:15px;
  border:none;
  color:#fff;
  background:#CCB39D;
`

const RetryButton = styled.button`
  margin-bottom:15px;
  border:none;
  border-radius:15px;
  padding:10px;
  width:150px;
  font-weight:700;
  font-size:16px;
  background:#FBE1CF;
`

const NewChoiceButton = styled.button`
  border:none;
  border-radius:15px;
  padding:10px;
  width:150px;
  font-weight:700;
  font-size:16px;
  background:#FBE1CF;
`