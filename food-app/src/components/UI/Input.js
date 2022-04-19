import React from "react";
const Input = React.forwardRef(({ text, id, input }, ref) => {
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
