import React from "react";

export const ChildOne = ({ name, children }) => {
  console.log("child render");
  return (
    <div>
      {children} {name}
    </div>
  );
};

export const Memoized = React.memo(ChildOne);
