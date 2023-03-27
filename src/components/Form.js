import React from "react";
import { useState } from "react";

import Header from "./Header";
import User from "./User";

function Form() {
  const isLogin = true;
  const [name, setName] = useState("Erol");
  const [surName] = useState("Senol");
  const [age, setAge] = useState(26);
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState("");

  const handleChange = (event) => {
    setNewFriend(event.target.value);

    console.log("value is:", event.target.value);
  };
  return (
    <>
      <Header name="Header" />

      <button
        onClick={() => {
          setName("Ahmet");
          setAge(age + 1);
        }}
      >
        Change Name
      </button>

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

      <label htmlFor="newFriend">
        New friend:
        <input type="text" onChange={handleChange} value={newFriend}></input>
        <button
          onClick={() => {
            setFriends([...friends, { name: newFriend }]);
            setNewFriend("");
          }}
        >
          Add Friend
        </button>
      </label>
    </>
  );
}

export default Form;
