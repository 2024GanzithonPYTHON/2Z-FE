import React from 'react'
import { styled } from 'styled-components'
import home from '../assets/home-2.png'
import note_2 from '../assets/note.png'
import user from '../assets/user.png'

const TabBar = () => {
  return (
    <TabBarBody>
      <img src={home} style={{width:"40px", height:"40px"}}/>
      {/* <img src={note} style={{width:"20px"}}/> */}
      <img src={note_2} style={{width:'40px', height:"40px"}}/>
      <img src={user} style={{width:"40px", height:"40px"}}/>
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
  gap:90px;
  justify-content:center;
  align-items:center;
  margin-bottom:20px;
`