import React, { useState } from "react";

function Item(props) {
  const text = {
    textDecoration: "line-through"
  };
  const [li, setli] = useState(false);
  function change() {
    setli((p) => !p);
  }
  return (
    <li
      onClick={change}
      style={{ textDecoration: li ? "line-through" : "none" }}
    >
      {props.todo}
    </li>
  );
}

export default Item;
