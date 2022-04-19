import "./MealItemForm.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = ({ id, addToCartHandler }) => {
  const amountInputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = parseInt(amountInputRef.current.value);
    if (enteredAmount < 1 || enteredAmount > 5) {
      setIsValidAmount(false);
      return;
    }
    addToCartHandler(enteredAmount);
  };
  const ex = {
    id: `amount+${id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input text={"Amount"} input={ex} ref={amountInputRef} />
      <button>Add</button>
      {!isValidAmount && <p>error 1-5 input!!</p>}
    </form>
  );
};

export default MealItemForm;
