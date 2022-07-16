import styled from "styled-components";

const Card = ({ title, ImageSRC, CloseVersionChoice }) => {
  return (
    <Container
      href={title === "ReactJS" ? "/" : "https://base-ecommerce.vercel.app/"}
      onClick={() => {
        title === "NextJS" && CloseVersionChoice();
      }}
    >
      <StyledImage src={ImageSRC} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

const Title = styled.p``;

const StyledImage = styled.img`
  width: 150px;
  height: 200px;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: 200ms;
  color: black;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0px 0px;
    cursor: pointer;
  }
`;

export default Card;
