import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    margin-bottom: 10%;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
  }
  .bgImage {
    height: 100%;
    background-position: top;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .cta {
    margin-bottom: 2vw;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    transition: all ease-out 0.5s;
    width: 100%;
    img {
      margin-bottom: 12px;
      max-width: 600px;
      min-height: 1px;
      display: block;
      width: 100%;
    }
  }
`;

const SignUp = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  text-align: center;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
const Login = () => {
  return (
    <Container>
      <div className="content">
        <div className="cta">
          <img src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET IT ALL THERE</SignUp>
          <Description>
            Get SOmething Premeirere Get SOmething Premeirere Get SOmething
            Premeirere Get SOmething Premeirere Get SOmething Premeirere Get
            SOmething Premeirere v Get SOmething Premeirere Get SOmething
            Premeirere Get SOmething Premeirere
          </Description>
          <CTALogo src="/images/cta-logo-two.png" alt="" />
        </div>
        <div className="bgImage"></div>
      </div>
    </Container>
  );
};

export default Login;
