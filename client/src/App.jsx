import { useState } from 'react'
import { Container, ImageContainer, ModalContainer } from "./styles/App"
import Banner from "./assets/bg-desktop-dark.jpg"
import Header from './components/Header'
import Input from './components/Input'
import TaskList from './components/TaskList'

function App() {

  return (
    <Container>
      <ImageContainer src={Banner} />
      <ModalContainer>
        <Header/>
        <Input/>
        <TaskList/>
      </ModalContainer>
    </Container>
  )
}

export default App
