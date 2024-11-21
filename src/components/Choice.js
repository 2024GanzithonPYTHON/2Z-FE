import React from 'react'
import { styled } from 'styled-components'

const Choice = () => {
  return (
    <ChoiceBody>
      <ItemChoiceBody>
        <ItemContents></ItemContents>
        <VsText>VS</VsText>
        <ItemContents></ItemContents>
        <ItemPlusButton>+</ItemPlusButton>
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

`

const ItemChoiceBody = styled.div`
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:center;
`

const ItemContents = styled.input`
  border-radius:15px;
  width:105px;
  height:50px;
  border:none;
  padding:10px;
  box-sizing:border-box;
  background-color:#FBE1CF;

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
  margin-top:20px;
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