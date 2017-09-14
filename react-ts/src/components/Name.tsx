import * as React from "react";

export function Name({ name, removeName }: any) {
  const onClick = () => {
    console.log(name)
    removeName && removeName(name)
  };
  return (
    <div>
      <span>This name is {name} :)</span>
      <button onClick={onClick}>Remove Name</button>
    </div>
  );
};
