import { useState } from 'react'
import {
  Container,
  ActionContainer,
  Action,
  Actionbutton,
} from './time-container.style'

const Time = () => {
  const [active, setActive] = useState(false)
  const [activeBreak, setActiveBreak] = useState(false)
  const [activeLongBreak, setActiveLongBreak] = useState(false)
  // const [active, setActive] = useState(true)
  return (
    <Container>
      <ActionContainer>
        <Action>
          <Actionbutton
            onClick={() => {
              setActive(!active)
              setActiveBreak(false)
              setActiveLongBreak(false)
            }}
            active={active}
          >
            Pomodoro
          </Actionbutton>

          <Actionbutton
            onClick={() => {
              setActive(false)
              setActiveBreak(!activeBreak)
              setActiveLongBreak(false)
            }}
            active={activeBreak}
          >
            Short Break
          </Actionbutton>

          <Actionbutton
            onClick={() => {
              setActive(false)
              setActiveBreak(false)
              setActiveLongBreak(!activeLongBreak)
            }}
            active={activeLongBreak}
          >
            Long Break
          </Actionbutton>
        </Action>
      </ActionContainer>
    </Container>
  )
}

export default Time
