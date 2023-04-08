import React from "react";

function Header(props) {
  console.log("header reReader");
  return (
    <>
      <div>Hello i am {props.number}</div>
      <div>data {JSON.stringify(props.data)}</div>
    </>
  );
}

export default React.memo(Header);
