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
  const [winrate, setWinrate] = useState("---");

  useEffect(() => {
    if (props.wins === 0 && props.losses === 0) {
      setWinrate("---");
    }
  }, []);

  useEffect(() => {
    const total = props.wins + props.losses;

    if (props.wins === 0 && props.losses === 0) {
      return;
    }

    const percentage = props.wins / total;
    const rate = percentage * 100;

    setWinrate(rate.toFixed(2));
  }, [props.wins, props.losses]);

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
