import { Container } from './showCounter.style'

const ShowCounter = ({ minutes, seconds }) => {
    return (
        <Container>
            <p>{minutes}:{seconds}</p>
        </Container>

    )
}

export default ShowCounter