import axios from '../api/baseURL';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Choice = ({myChat, setMyChat, aiResponse, setAiResponse, isResponse,setIsResponse}) => {
  const [itemNum, setItemNum] = useState([]);
  const [bottomStyle, setBottomStyle] = useState("-130px")
  const [choices, setChoices] = useState([]);
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [choice5, setChoice5] = useState("");
  const [setting, setSetting] = useState("");
  

  const itemAdd = () => {
    console.log(itemNum)
    const newItem = `Item ${itemNum.length + 1}`;
    setItemNum([...itemNum, newItem]);
    
  }

  async function handleChatSubmit(){
    try {
    //   const response = axios.post("/recommends/request",{
    //     "userId":"",
    //     "setting":setting,
    //     "choices":choices
    //   })
    //   console.log(response)
      const data = {
        "statusCode": 200,
        "message": "성공적으로 추천받았습니다.",
        "data": {
              "choice": "추천 : 유튜브보기",
            "reason": "추천 이유: 사용자는 지금 심심한 상태이며, 사회적 상호작용 선호도가 높아서 혼자 있는 것보다 다른 사람들과의 간접적인 상호작용을 선호할 가능성이 큽니다. 유튜브는 다양한 콘텐츠를 제공하여 즉각적으로 재미를 느낄 수 있으며, 동시에 다양한 주제의 비디오를 통해 새로운 정보나 트렌드를 쉽게 접할 수 있습니다. 또한 사용자는 시간 관리를 중요시하므로, 비교적 짧은 영상들을 선택하여 시간을 효율적으로 사용할 수 있습니다. 결정 스타일이 낮고 편안함을 덜 추구하며 리스크 감수 성향이 높다는 점에서 새로운 콘텐츠를 접하여 다양한 경험을 누려보는 것도 사용자의 성향에 부합합니다."
        }
    }
      setAiResponse(data);
      setIsResponse(true);
      console.log(isResponse);
    } catch (error) {
      // console.log(error);
      console.log(choices);
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