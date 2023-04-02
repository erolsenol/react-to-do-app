import { useState, useEffect } from "react";

import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useResolvedPath,
  useLocation,
} from "react-router-dom";

import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);

  const { pathname } = useResolvedPath();
  const location = useLocation();

  console.log(pathname);
  console.log(location);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Users;
