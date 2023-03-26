import "./App.css";

import Header from "./components/Header";
import User from "./components/User";

const name = "Erol";
const surName = "Senol";
const isLogin = true;
const age = 26;

const friends = [
  { name: "Ahmet" },
  { name: "ayse" },
  { name: "fatma" },
  { name: "ali" },
  { name: "veli" },
  { name: "mehmet" },
];

function App() {
  return (
    <div className="App">
      <Header name="Header" />

      <User
        name={name}
        surName={surName}
        isLogin={isLogin}
        age={age}
        friends={friends}
        adress={{
          title: "Pendik/İstanbul",
          zip: 34777,
        }}
      />
    </div>
  );
}

export default App;
