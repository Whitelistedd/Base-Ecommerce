import styled from '@emotion/styled'

export const Title = styled.p`
  margin: 0px;
  font-size: 0.93em;
  font-weight: 900;
`

export const Product = styled(Title)`
  padding-top: 10px;
`

export const Date = styled.p`
  margin: 0px;
  flex: 1;
  font-size: 0.9em;
`

export const Desc = styled(Date)`
  line-clamp: 5;
  overflow: hidden;
`

export const Info = styled.div``

export const Details = styled.div``

export const Wrap = styled.div`
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

export const Container = styled.div`
  padding: 10px 5px;

  min-height: 100%;
  height: 100%;

  @media only screen and (max-width: 350px) {
    ${Title}, ${Desc} {
      font-size: 0.85em;
    }
  }
`
