import React from "react";
import { useParams, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

function User() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <code>
            Userid:{id} {JSON.stringify(user)}
          </code>

          <br />
          <br />

          <Link to={`/users/${parseInt(id) + 1}`}>
            Next User ({parseInt(id) + 1})
          </Link>
        </>
      )}
    </div>
  );
}

export default User;
