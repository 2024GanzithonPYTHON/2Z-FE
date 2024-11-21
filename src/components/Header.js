import React from 'react'
import { styled } from 'styled-components'
import back_arrow from '../assets/arrow_back.png'

const Header = () => {
  return (
    <HeaderBody>
      <BackButton>
        <img src={back_arrow} style={{width:'33px', height:'28px'}}/>
      </BackButton>
      <HeaderTitle>물어바라</HeaderTitle>
    </HeaderBody>
  )
}

export default Header

const HeaderBody = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const HeaderTitle = styled.p`
  flex-grow:1;
  font-weight:800;
  font-size:20px;
`

const BackButton = styled.button`
  width:33px;
  height:28px;
  border:none;
  background:none;
`