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
  const [form, setForm] = useState({ name: "", surname: "" });

  const handleChange = (event) => {
    setNewFriend(event.target.value);

    console.log("value is:", event.target.value);
  };

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

      <br />
      <br />

      <div>
        Name Surname <br />
        <input name="name" onChange={onChangeInput} value={form.name}></input>
        <br />
        <br />
        <input
          name="surname"
          onChange={onChangeInput}
          value={form.surname}
        ></input>
        <br />
        <br />
        {form.name} {form.surname}
      </div>
    </>
  );
}

export default Form;
