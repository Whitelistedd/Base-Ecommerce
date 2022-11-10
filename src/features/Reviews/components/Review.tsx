import { ReviewProps } from '../types/Review'
import { Stars } from 'components/Elements/Stars/Stars'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'

export const Review: React.FC<ReviewProps> = ({
  title,
  desc,
  product,
  stars,
  date,
}) => {
  const Desktop = useMediaQuery('(min-width: 1600px)')

  const Laptop = useMediaQuery('(min-width: 1000px)')

  return (
    <Container>
      <Wrap>
        <Info>
          <Stars amount={stars} />
          <Title>{title}</Title>
          <Desc>
            {desc.length > 100 && !Desktop
              ? `${desc.slice(0, Laptop ? 100 : 60)}...`
              : desc}
          </Desc>
        </Info>
        <Details>
          <Product>{product}</Product>
          <Date>{date}</Date>
        </Details>
      </Wrap>
    </Container>
  )
}

const Title = styled.p`
  margin: 0px;
  font-size: 0.93em;
  font-weight: 900;
`

const Product = styled(Title)`
  padding-top: 10px;
`

const Date = styled.p`
  margin: 0px;
  flex: 1;
  font-size: 0.9em;
`

const Desc = styled(Date)`
  line-clamp: 5;
  overflow: hidden;
`

const Info = styled.div``

const Details = styled.div``

const Wrap = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px #00000022;
  display: flex;
  gap: 5px;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  color: grey;
`

const Container = styled.div`
  padding: 10px 5px;

  min-height: 100%;
  height: 100%;

  @media only screen and (max-width: 350px) {
    ${Title}, ${Desc} {
      font-size: 0.85em;
    }
  }
`
