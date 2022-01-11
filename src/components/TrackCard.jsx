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

export const TrackCard = () => {
  return (
    <Card>
      <Name>Hi</Name>
      <CounterContainer>
        <AddCounter>
          <PlusSign />
        </AddCounter>
        <Counter></Counter>
        <RemoveCounter>
          <MinusSign />
        </RemoveCounter>
      </CounterContainer>
    </Card>
  );
};
