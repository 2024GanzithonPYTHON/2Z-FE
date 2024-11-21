import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Choice = () => {
  const [itemNum, setItemNum] = useState([]);
  const [bottomStyle, setBottomStyle] = useState("-130px")
  

  const itemAdd = () => {
    console.log(itemNum)
    const newItem = `Item ${itemNum.length + 1}`;
    setItemNum([...itemNum, newItem]);
    
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

  

  return (
    <ChoiceBody>
      <ItemChoiceBody style={{bottom:{bottomStyle}}}>
        <ItemContents></ItemContents>
        <VsText>VS</VsText>
        <ItemContents></ItemContents>
        {itemNum.map((item) => {
          return(
            <>
              <VsText>VS</VsText>
              <ItemContents></ItemContents>
            </>
          )
        })}
        <ItemPlusButton onClick={() => itemAdd()}>+</ItemPlusButton>
      </ItemChoiceBody>
      <OptionBody>
        <OptionInput placeholder='변수를 입력해주세요'>

        </OptionInput>
        <OptionButton>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_right_alt" />
          <span class="material-symbols-outlined">
            arrow_right_alt
          </span>
        </OptionButton>
      </OptionBody>
    </ChoiceBody>
  )
}

export default Choice

const ChoiceBody = styled.div`
  position:relative;
`

const ItemChoiceBody = styled.div`
  display:flex;
  gap:10px;
  width:360px;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  position:absolute;
  
  bottom:-120px;

`

const ItemContents = styled.input`
  border-radius:15px;
  width:105px;
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
  position:absolute;
  bottom:-210px;
  left: 20px;
  margin-bottom:30px;
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