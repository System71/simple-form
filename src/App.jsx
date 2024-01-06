import "./App.css";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  return (
    <>
      {confirmation ? (
        <Confirmation
          name={name}
          email={email}
          password={password}
          confirmation={confirmation}
          setConfirmation={setConfirmation}
        />
      ) : (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordVerif={passwordVerif}
          setPasswordVerif={setPasswordVerif}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          confirmation={confirmation}
          setConfirmation={setConfirmation}
        />
      )}
    </>
  );
}

export default App;
