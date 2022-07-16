import Image from 'next/image'
import styled from 'styled-components'
import { CardProps } from './VersionChoice.model'
import Link from 'next/link'

const Card: React.FC<CardProps> = ({ title, ImageSRC }) => {
  return (
    <Link href={title === 'ReactJS' ? 'https://base-shop.vercel.app/' : '/'}>
      <Container>
        <ImageWrap>
          <StyledImage
            layout="responsive"
            width={200}
            height={200}
            src={ImageSRC}
            alt={title}
          />
        </ImageWrap>
        <Title>{title}</Title>
      </Container>
    </Link>
  )
}

const Title = styled.p``

const StyledImage = styled(Image)``

const ImageWrap = styled.div`
  width: 150px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: 200ms;

  &:hover {
    box-shadow: 0px 0px 0px;
    cursor: pointer;
  }
`

export default Card
