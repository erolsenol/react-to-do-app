import { useEffect, useState } from "react";

import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user, index) => <div key={index}>{user.name}</div>)
      )}
    </div>
  );
}

export default Users;
