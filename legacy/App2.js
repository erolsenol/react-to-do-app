import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/users" Component={Users}>
            <Route path="/users/:id" Component={User}></Route>
          </Route>
          <Route path="*" Component={Error404}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
