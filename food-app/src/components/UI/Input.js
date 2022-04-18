const Input = ({ text, id, input }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
