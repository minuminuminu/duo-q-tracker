import { useState, useEffect } from "react";
import { Modal } from "./components/Modal";
import { FullBody } from "./styles/AppStyles";
import { AddCard } from "./components/AddCard";
import { Cards } from "./components/Cards";

function App() {
  const [onloadMessage, setOnloadMessage] = useState(
    localStorage.getItem("onload") ? localStorage.getItem("onload") : "true"
  );
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (onloadMessage === "false") {
      setOnloadMessage(false);
    } else if (onloadMessage === "true") {
      setOnloadMessage(true);
    } else {
      setOnloadMessage(true);
    }
  }, []);

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("names"));
    Object.entries(userObj).map((e) => {
      Object.entries(e[1]).map((u) => {
        console.log(u);
      });
    });
  }, []);

  return (
    <>
      {/* <Modal modal={onloadMessage} setOnloadMessage={setOnloadMessage} /> */}
      <FullBody>
        <AddCard />
        <Cards />
      </FullBody>
    </>
  );
}

export default App;
