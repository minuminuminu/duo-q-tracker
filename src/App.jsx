import { useState, useEffect } from "react";
import { FullBody } from "./components/FullBody";
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
    } else {
      setOnloadMessage(true);
    }
  }, []);

  return (
    <FullBody>
      <Modal modal={onloadMessage} setOnloadMessage={setOnloadMessage} />
    </FullBody>
  );
}

export default App;
