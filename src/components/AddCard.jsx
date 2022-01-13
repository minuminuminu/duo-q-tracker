import { Content, Form, Input, SubmitButton } from "../styles/AddCard";
import { useForm } from "react-hook-form";

export const AddCard = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.entry === "") {
      alert("You need to enter a valid name!");
    } else {
      console.log(data.entry);
      localStorage.setItem("names", JSON.stringify(test));
      console.log(JSON.parse(localStorage.getItem("names")));
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
