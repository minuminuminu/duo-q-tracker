import { useState, useEffect } from "react";
import { Modal } from "./components/Modal";
import { FullBody } from "./styles/AppStyles";
import { AddCard } from "./components/AddCard";
import { Cards } from "./components/Cards";

function App() {
  const [onloadMessage, setOnloadMessage] = useState(
    localStorage.getItem("onload") ? localStorage.getItem("onload") : "true"
  );
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState(JSON.parse(localStorage.getItem("names")));

  useEffect(() => {
    if (onloadMessage === "true") {
      setOnloadMessage(true);
    } else {
      setOnloadMessage(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("names") === null) {
      return;
    }

    const userObj = JSON.parse(localStorage.getItem("names"));
    setUsers(Object.entries(userObj));
  }, [names]);

  const setLocalStorage = (obj) => {
    const newObj = { ...names, ...obj };
    localStorage.setItem("names", JSON.stringify(newObj));
    setNames(newObj);
  };

  const removeFunc = (name) => {
    let newObj = { ...names };
    delete newObj[name];
    localStorage.setItem("names", JSON.stringify(newObj));
    setNames(newObj);
  };

  const methods = {
    win: (name) => {
      const myObj = [...users];
      myObj.map((e) => {
        if (name !== e[0]) {
          return;
        } else {
          e[1].wins += 1;
          let newObj = JSON.parse(localStorage.getItem("names"));
          newObj[name].wins += 1;
          localStorage.setItem("names", JSON.stringify(newObj));
          setNames(newObj);
        }
      });
      setUsers(myObj);
    },
    loss: (name) => {
      const myObj = [...users];
      myObj.map((e) => {
        if (name !== e[0]) {
          return;
        } else {
          e[1].losses += 1;
          let newObj = JSON.parse(localStorage.getItem("names"));
          newObj[name].losses += 1;
          localStorage.setItem("names", JSON.stringify(newObj));
          setNames(newObj);
        }
      });

      setUsers(myObj);
    },
  };

  return (
    <>
      <Modal modal={onloadMessage} setOnloadMessage={setOnloadMessage} />
      <FullBody>
        <AddCard setLocalStorage={setLocalStorage} />
        <Cards users={users} removeFunc={removeFunc} methods={methods} />
      </FullBody>
    </>
  );
}

export default App;
