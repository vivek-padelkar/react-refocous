import './App.css'
import Header from './component/header/heaer.component'
import MainContainer from './component/main-container/main-container.component'
import Time from './component/time-container/time-container.conponent'

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Time />
      </MainContainer>
    </div>
  )
}

export default App
