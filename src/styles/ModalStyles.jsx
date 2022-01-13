import styled from "styled-components";
import { keyframes } from "styled-components";

const transitionIn = keyframes`
  from {
    opacity:0;
    transform: rotateY(-10deg)
  }

  to{
    opacity: 1;
    transform:rotateY(0)
  }
`;

export const BackgroundBlur = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000028;
  display: flex;
  justify-content: center;
  position: absolute;

  animation: ${(props) => (props.loaded ? transitionIn : null)} 0.75s;
`;

export const DialogueBox = styled.div`
  width: 40vw;
  height: 150px;
  background-color: white;
  box-shadow: 0 0 5px white;
  margin: 30px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextPart = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  border: 1px solid;
  width: 99%;
  height: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin: 2px;
  }
`;

export const UIPart = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 4px;
  }
`;

export const ConfirmButton = styled.button`
  padding: 8px 28px 8px 28px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  background-color: #76f076;
  transition: background-color 0.2;

  &:hover {
    background-color: #72e672;
    cursor: pointer;
  }
`;
