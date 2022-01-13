import { Content } from "../styles/CardsStyles";
import { TrackCard } from "./TrackCard";

export const Cards = (props) => {
  return (
    <Content>
      {props.users.map((user, index) => {
        return (
          <TrackCard
            name={user[0]}
            wins={user[1].wins}
            losses={user[1].losses}
            removeFunc={props.removeFunc}
            methods={props.methods}
            key={index}
          />
        );
      })}
    </Content>
  );
};
