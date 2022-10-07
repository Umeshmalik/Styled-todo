import { Container, ImageContainer, ModalContainer } from "./styles/App"
import Banner from "./assets/bg-desktop-dark.jpg"
import Header from './components/Header'
import Input from './components/Input'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

function App() {

  return (
    <Container>
      <ImageContainer src={Banner} />
      <ModalContainer>
        <Header/>
        <Input/>
        <TaskList/>
        <Footer/>
      </ModalContainer>
    </Container>
  )
}

export default App
