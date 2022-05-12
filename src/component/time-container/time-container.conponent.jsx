import { useState } from 'react'
import {
  Container,
  ActionContainer,
  Action,
  Actionbutton,
  TimerWrapper
} from './time-container.style'
import { backGroundConstats } from '../../context/contstant'
import { useContext } from 'react'
import { MyContext } from '../../context/store'
import {
  startBackgroundColor, shortBreakBackgroundColor,
  longBreakBackgroundColor
} from '../../constants/constatntStyle'
import Timer from '../timer/timer.component'

const TimerContainer = () => {
  const { dispatch } = useContext(MyContext)
  const [active, setActive] = useState(false)
  const [activeBreak, setActiveBreak] = useState(false)
  const [activeLongBreak, setActiveLongBreak] = useState(false)
  const [startTime, setStartTime] = useState(0)
  // const [active, setActive] = useState(true)

  const changeBcakgroundColor = (e, color) => {
    e.preventDefault()
    dispatch({ type: backGroundConstats.CHANGE_BACKGROUND, payload: color })
  }

  const startTimer = (e, breakType) => {
    e.preventDefault()
    let THREE_DAYS_IN_MS = 0

    if (breakType === 'start') {
      THREE_DAYS_IN_MS = 25 * 60 * 1000
    } else if (breakType === 'shortBreak') {
      THREE_DAYS_IN_MS = 5 * 60 * 1000
    } else if (breakType === 'longBreak') {
      THREE_DAYS_IN_MS = 15 * 60 * 1000
    }

    const NOW_IN_MS = new Date().getTime()

    setStartTime(NOW_IN_MS + THREE_DAYS_IN_MS)
  }

  return (
    <Container>
      <ActionContainer>
        <Action>
          <Actionbutton
            onClick={(e) => {
              setActive(!active)
              setActiveBreak(false)
              setActiveLongBreak(false)
              changeBcakgroundColor(e, startBackgroundColor)
              startTimer(e, 'start')
            }}
            active={active}
          >
            Pomodoro
          </Actionbutton>

          <Actionbutton
            onClick={(e) => {
              setActive(false)
              setActiveBreak(!activeBreak)
              setActiveLongBreak(false)
              changeBcakgroundColor(e, shortBreakBackgroundColor)
              startTimer(e, 'shortBreak')
            }}
            active={activeBreak}
          >
            Short Break
          </Actionbutton>

          <Actionbutton
            onClick={(e) => {
              setActive(false)
              setActiveBreak(false)
              setActiveLongBreak(!activeLongBreak)
              changeBcakgroundColor(e, longBreakBackgroundColor)
              startTimer(e, 'longBreak')
            }}
            active={activeLongBreak}
          >
            Long Break
          </Actionbutton>
        </Action>
      </ActionContainer>

      <TimerWrapper>
        <Timer targetDate={startTime} />
      </TimerWrapper>
    </Container>
  )
}

export default TimerContainer
