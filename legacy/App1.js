import "./App.css";

import { useState } from "react";

import Form from "./components/Form";
import Number from "./components/Number";
import A from "./components/A";
import B from "./components/B";

function App() {
  const [numberVisible, setNumberVisible] = useState(true);
  return (
    <div className="App">
      <Form name="Header" />

      {numberVisible && <Number />}

      <button onClick={() => setNumberVisible(!numberVisible)}>
        Number Visible Change
      </button>

      <A />
      <B />

      <br />
    </div>
  );
}

export default App;
