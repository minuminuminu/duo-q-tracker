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
  const [count, setCount] = useState([0, 0]);
  const [winrate, setWinrate] = useState("---");

  const add = () => {
    setCount([count[0] + 1, count[1]]);
  };

  const remove = () => {
    setCount([count[0], count[1] + 1]);
  };

  useEffect(() => {
    if (count[0] === 0 && count[1] === 0) {
      setWinrate("---");
    }
  }, []);

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
      <Name>{props.name}</Name>
      <CounterContainer>
        <AddCounter onClick={() => add()}>
          <PlusSign />
        </AddCounter>
        <Counter>
          <div>Wins: {count[0]}</div>
          <div>Losses: {count[1]}</div>
          <div>Winrate: {winrate}%</div>
        </Counter>
        <RemoveCounter onClick={() => remove()}>
          <MinusSign />
        </RemoveCounter>
      </CounterContainer>
    </Card>
  );
};
