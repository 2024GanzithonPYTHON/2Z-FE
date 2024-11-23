import React from 'react'
import { styled } from 'styled-components'
import back_arrow from '../assets/arrow_back.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderBody>
      <Link to='/'>
        <BackButton>
          <img src={back_arrow} style={{width:'33px', height:'28px'}}/>
        </BackButton>
      </Link>
      <HeaderTitle>물어바라</HeaderTitle>
    </HeaderBody>
  )
}

export default Header

const HeaderBody = styled.div`
  display:flex;
  justify:content:center;
  align-items:center;
  width:393px;
  position:relative;
  top:0;
  gap:120px;
`

const HeaderTitle = styled.p`
  // position:absolute;
  right:20px;
  font-weight:800;
  font-size:20px;
`

const BackButton = styled.button`
  width:33px;
  height:28px;
  border:none;
  background:none;
  margin-left:10px;
`