import { Conatiner } from './timer.style'
import { useCountdown } from '../../hooks/useCountdown'
import ShowCounter from '../showCounter/showCounter.component'

const Timer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown({ targetDate })
    if (minutes + seconds <= 0) {
        <div>TIMER EXPIRED</div>
    } else {
        return (
            <ShowCounter
                minutes={minutes}
                seconds={seconds}
            />
        )
    }

}

export default Timer