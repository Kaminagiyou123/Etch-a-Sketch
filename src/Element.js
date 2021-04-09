import React, { useState } from "react";

const Element = ({ i }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      key={i}
      className={active ? "grid-item-active" : "grid-item"}
      onMouseEnter={() => setActive(true)}
    ></div>
  );
};

export default Element;
