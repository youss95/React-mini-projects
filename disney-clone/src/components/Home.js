import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewrs from "./Viewrs";

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);

  top: 72px;
  padding: 0 calc(1vw + 5px);
  &::after {
    content: "";
    position: absolute;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    opacity: 1;
    z-index: -1;
    inset: 0px;
  }
`;
const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewrs />
    </Container>
  );
};

export default Home;
