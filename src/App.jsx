import { useState, useEffect } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [onloadMessage, setOnloadMessage] = useState(
    localStorage.getItem("onload") ? localStorage.getItem("onload") : "true"
  );

  useEffect(() => {
    if (onloadMessage === "false") {
      setOnloadMessage(false);
    } else if (onloadMessage === "true") {
      setOnloadMessage(true);
    }
  });

  return (
    <>
      <Modal modal={onloadMessage} setOnloadMessage={setOnloadMessage} />
    </>
  );
}

export default App;
