import { Content, Form, Input } from "../styles/AddCard";
import { useForm } from "react-hook-form";

export const AddCard = () => {
  return (
    <Content>
      <Form>
        <Input type="text" placeholder="New Duo Entry" />
      </Form>
    </Content>
  );
};
