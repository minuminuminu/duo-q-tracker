import styled from "styled-components";

export const Content = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  width: 11vw;
  border-radius: 6px;
  margin: 15px;
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

export const SubmitButton = styled.button`
  width: 8vw;
  height: 31px;
  border: none;
  border-radius: 8px;
  background-color: #5aeb5a;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #4fe04f;
  }
`;
