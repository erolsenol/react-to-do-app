import { useState, useMemo } from "react";
import "./App.css";

import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return {
      name: "Erol",
    };
  }, []);
  return (
    <div className="App">
      <Header data={data} number={number < 5 ? 0 : number} />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Numder Decrease</button>
    </div>
  );
}

export default App;
