import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Button from "./components/Button";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <ThemeProvider>
      <Header />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Numder Decrease</button>
    </ThemeProvider>
  );
}

export default App;
