import styled from "styled-components";
import { keyframes } from "styled-components";

const transitionIn = keyframes`
  from {
    opacity:0;
    transform:rotateY(10deg)
  }

  to{
    opacity:1;
    transform:rotateY(0)
  }
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${transitionIn} 0.5s;
`;

export const FullBody = () => {
  return <Body></Body>;
};
