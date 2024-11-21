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
      <img src={user} style={{width:"35px", height:"35px"}}/>
    </TabBarBody>
  )
}

export default TabBar

const TabBarBody = styled.div`
  width:360px;
  height:60px;
  position:absolute;
  background:white;
  bottom:0;
  display:flex;
  gap:95px;
  justify-content:center;
  align-items:center;
  margin-bottom:20px;
`