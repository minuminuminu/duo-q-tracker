import {
  AddCounter,
  Card,
  Counter,
  CounterContainer,
  MinusSign,
  Name,
  PlusSign,
  RemoveCounter,
} from "../styles/TrackCardStyles";
import { useState, useEffect } from "react";

export const TrackCard = (props) => {
  const [count, setCount] = useState([props.wins, props.losses]);
  const [winrate, setWinrate] = useState("---");

  useEffect(() => {
    if (count[0] === 0 && count[1] === 0) {
      setWinrate("---");
    }
  }, []);

  useEffect(() => {
    setCount([props.wins, props.losses]);
  }, [props.wins, props.losses]);

  useEffect(() => {
    const total = count[0] + count[1];

    if (count[0] === 0 && count[1] === 0) {
      return;
    }

    const percentage = count[0] / total;
    const rate = percentage * 100;

    setWinrate(rate.toFixed(2));
  }, [count]);

  return (
    <Card>
      <Name onClick={() => props.removeFunc(props.name)}>{props.name}</Name>
      <CounterContainer>
        <AddCounter onClick={() => props.methods.win(props.name)}>
          <PlusSign />
        </AddCounter>
        <Counter>
          <div>Wins: {props.wins}</div>
          <div>Losses: {props.losses}</div>
          <div>Winrate: {winrate}%</div>
        </Counter>
        <RemoveCounter onClick={() => props.methods.loss(props.name)}>
          <MinusSign />
        </RemoveCounter>
      </CounterContainer>
    </Card>
  );
};
