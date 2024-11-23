import React from 'react'
import { styled } from 'styled-components'
import home from '../assets/home-2.png'
import note_2 from '../assets/note.png'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'

const TabBar = () => {
  return (
    <TabBarBody>
      <Link to='/goal'>
        <img src={note_2} style={{width:'35px', height:"35px"}}/>
      </Link>
      <Link to='/'>
        <img src={home} style={{width:"35px", height:"35px"}}/>
      </Link>
      <Link to='/mypage'>
        <img src={user} style={{width:"35px", height:"35px"}}/>
      </Link>
    </TabBarBody>
  )
}

export default TabBar

const TabBarBody = styled.div`
  width:393px;
  height:60px;
  position:fixed;
  background:#fff;
  bottom:0;
  display:flex;
  gap:95px;
  justify-content:center;
  align-items:center;
  // margin-bottom:20px;
  padding:20px 0;
  box-sizing:border-box;
`