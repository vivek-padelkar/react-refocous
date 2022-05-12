import { Container } from './main.style'
import { useContext } from 'react'
import { MyContext } from '../../context/store'

const MainContainer = ({ children }) => {
  const { backgroundColor
  } = useContext(MyContext)

  return <Container style={{ backgroundColor }}>{children}</Container>
}

export default MainContainer
