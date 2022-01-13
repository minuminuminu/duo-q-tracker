import { Content, Form, Input, SubmitButton } from "../styles/AddCard";
import { useForm } from "react-hook-form";

export const AddCard = (props) => {
  const { register, resetField, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.entry === "") {
      alert("You need to enter a valid name!");
    } else {
      props.setLocalStorage({
        [data["entry"].toLowerCase()]: { wins: 0, losses: 0 },
      });
      resetField("entry");
    }
  };

  return (
    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          autoComplete="off"
          placeholder="New Duo Entry"
          {...register("entry")}
        />
        <SubmitButton>Add Tracker</SubmitButton>
      </Form>
    </Content>
  );
};
