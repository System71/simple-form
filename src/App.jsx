import "./App.css";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Form name={props.name} />
      <Confirmation />
    </>
  );
}

export default App;
