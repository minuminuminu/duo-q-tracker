import ReactDom from "react-dom";
import styled from "styled-components";

const BackgroundBlur = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000028;
  display: flex;
  justify-content: center;
`;

const DialogueBox = styled.div`
  width: 40vw;
  height: 150px;
  background-color: white;
  box-shadow: 0 0 15px black;
  margin: 30px;
`;

const ConfirmButton = styled.button``;

export const Modal = (props) => {
  return ReactDom.createPortal(
    <>
      {props.modal ? (
        <BackgroundBlur>
          <DialogueBox>
            <ConfirmButton
              onClick={() => {
                props.setOnloadMessage(localStorage.setItem("onload", false));
              }}
            >
              TEST
            </ConfirmButton>
          </DialogueBox>
        </BackgroundBlur>
      ) : null}
    </>,
    document.getElementById("alert")
  );
};
