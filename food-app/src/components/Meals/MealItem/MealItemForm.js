import "./MealItemForm.css";
import Input from "../../UI/Input";
const MealItemForm = () => {
  const ex = {
    id: "amount",
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className="form">
      <Input text={"Amount"} input={ex} />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
