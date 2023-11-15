import React from "react";

export function Counter() {
  const [value, setValue] = React.useState(0);

  return <button onClick={() => setValue((v) => v + 1)}>value: {value}</button>;
}
