import {
  AddCounter,
  Card,
  Counter,
  CloseIcon,
  CounterContainer,
  MinusSign,
  Name,
  PlusSign,
  RemoveCounter,
} from "../styles/TrackCardStyles";
import { useState, useEffect } from "react";
import { CloseContainer } from "../styles/TrackCardStyles";

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
      <Name>
        <div>{props.name}</div>
        <CloseContainer onClick={() => props.removeFunc(props.name)}>
          <CloseIcon />
        </CloseContainer>
      </Name>
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
