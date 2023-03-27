import { useState, useEffect } from "react";

function Number() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Number Component Mount");

    return () => {
      console.log("Number Component UnMount");
    };
  }, []);

  useEffect(() => {
    console.log("State Update");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Number +
      </button>
    </div>
  );
}

export default Number;
