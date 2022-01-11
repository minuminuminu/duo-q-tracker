import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

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
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
`;

export const CounterContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
    background-color: #e03f3fbf;
  }
`;

export const MinusSign = styled(AiOutlineMinus)`
  font-size: 40px;
`;
