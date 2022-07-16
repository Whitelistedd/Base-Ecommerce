import styled from 'styled-components'
import { devices, VersionCards } from '../../data'
import Card from './Card'

const VersionChoice: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <Title>Выберите версию</Title>
        <Cards>
          {VersionCards.map((card) => (
            <Card key={card.title} title={card.title} ImageSRC={card.Image} />
          ))}
        </Cards>
      </Wrap>
    </Container>
  )
}

const Cards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`

const Title = styled.h1``

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  min-width: 400px;
  width: 40%;
`

const Container = styled.div`
  min-height: 800px;
  height: 100vh;
  width: 100vw;
  max-width: 1920px;
  background-color: #dfd7d7;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${devices.Phone}px) {
    ${Wrap} {
      min-width: 100%;
    }
  }
`

export default VersionChoice
