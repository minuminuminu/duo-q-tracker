import ReactDom from "react-dom";
import { useForm } from "react-hook-form";
import {
  BackgroundBlur,
  DialogueBox,
  Content,
  TextPart,
  UIPart,
  ConfirmButton,
  Form,
  CheckboxContainer,
  Text,
} from "../styles/ModalStyles";

export const Modal = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.checked == true) {
      props.setOnloadMessage(false);
      localStorage.setItem("onload", false);
    } else {
      props.setOnloadMessage(false);
    }
  };

  return ReactDom.createPortal(
    <>
      {props.modal ? (
        <BackgroundBlur loaded={props.modal ? true : false}>
          <DialogueBox>
            <Content>
              <TextPart>
                <Text>
                  <div>
                    NOTE: The data is stored in your browser. The track of your
                    Duo-Queue Games is being kept on each machine individually.
                  </div>
                  <br />
                  <div>
                    e.g.: You won't see the track from your PC browser on your
                    mobile browser.
                  </div>
                </Text>
              </TextPart>
              <UIPart>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <CheckboxContainer>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      {...register("checked")}
                    />
                    <label htmlFor="checkbox">
                      Understood, don't show again.
                    </label>
                  </CheckboxContainer>
                  <ConfirmButton>Close</ConfirmButton>
                </Form>
              </UIPart>
            </Content>
          </DialogueBox>
        </BackgroundBlur>
      ) : null}
    </>,
    document.getElementById("alert")
  );
};
