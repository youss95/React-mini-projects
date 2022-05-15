import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Viewrs = () => {
  return (
    <Container>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Container>
  );
};

export default Viewrs;
