import React from 'react'
import { styled } from 'styled-components'

const TabBar = () => {
  return (
    <TabBarBody></TabBarBody>
  )
}

export default TabBar

const TabBarBody = styled.div`
  width:360px;
  height:60px;
  position:fixed;
  bottom:0;
  background-color:green;
`