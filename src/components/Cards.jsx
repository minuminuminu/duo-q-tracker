import { Content } from "../styles/CardsStyles";
import { TrackCard } from "./TrackCard";

export const Cards = (props) => {
  return (
    <Content>
      <TrackCard name="Luis" />
      <TrackCard name="Nil" />
    </Content>
  );
};
