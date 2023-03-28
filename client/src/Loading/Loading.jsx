import React from 'react'
//import Load from './loading.gif'
import { Box,styled } from '@mui/material'
const Container = styled(Box)`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
const Loader = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  animation: loading 1s ease-in-out infinite;
  @keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`
const Loading = () => {
  return (
    <Container>
    <Loader></Loader>
    </Container>
  )
}
export default Loading
