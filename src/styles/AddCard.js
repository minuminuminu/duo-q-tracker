import styled from "styled-components";

export const Content = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form``;

export const Input = styled.input`
  border: none;
  width: 10vw;
  box-shadow: 0 0 10px -5px;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  transition: all 0.35s ease-in-out;

  &:focus {
    width: 20vw;
    box-shadow: 0 0 20px -10px;
    transform: scale(1.1);
    outline: none;
  }
`;
