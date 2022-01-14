import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export const Card = styled.div`
  margin: 18px;
  background-color: #ffffff37;
  height: 15rem;
  box-shadow: 0 0 15px -10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.div`
  position: relative;
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
  padding: 6px;
  background-color: #e72c2cb9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #d82525c0;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 25px;
`;

export const CounterContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export const AddCounter = styled.div`
  background-color: #55e755bf;
  border-radius: 8px;
  height: 3em;
  width: 3em;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #45d345bf;
  }
`;

export const PlusSign = styled(AiOutlinePlus)`
  font-size: 40px;
`;

export const Counter = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 300;

  & > div {
    margin: 2px;
  }
`;

export const RemoveCounter = styled.div`
  background-color: #f14242bf;
  border-radius: 8px;
  height: 3em;
  width: 3em;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #da3131c5;
  }
`;

export const MinusSign = styled(AiOutlineMinus)`
  font-size: 40px;
`;
