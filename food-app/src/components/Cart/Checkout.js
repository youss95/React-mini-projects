import { useRef, useState } from "react";
const isEmpty = (value) => value.trim() === "";
const isNotLength = (value) => value.trim().length === 5;
const Checkout = ({ onClick, onConfirm }) => {
  const [formInputsValid, setFormInputValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (e) => {
    e.preventDefault();
    const entername = nameInputRef.current.value;
    const enterStreet = streetInputRef.current.value;
    const enterPost = postInputRef.current.value;
    const enterCity = cityInputRef.current.value;

    const enterNameValid = !isEmpty(entername);
    const enterStreetValid = !isEmpty(enterStreet);
    const enterCityValid = !isEmpty(enterCity);
    const enterPostValid = isNotLength(enterPost);
    setFormInputValid({
      name: enterNameValid,
      street: enterStreetValid,
      city: enterCityValid,
      postalCode: enterPostValid,
    });
    //다 사실이면
    const formValid =
      enterNameValid && enterStreetValid && enterCityValid && enterPostValid;

    if (formValid) {
    }
    onConfirm({
      name: entername,
      street: enterStreet,
      city: enterCity,
      postalCode: enterPost,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValid.name && <p>Please enter a name</p>}
      </div>
      <div className="control">
        <label htmlFor="name">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValid.street && <p>Please enter a street</p>}
      </div>
      <div className="control">
        <label htmlFor="name">Postal Code</label>
        <input type="text" id="postal" ref={postInputRef} />
        {!formInputsValid.postalCode && <p>more than 5</p>}
      </div>
      <div className="control">
        <label htmlFor="name">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValid.city && <p>Please enter a city</p>}
      </div>
      <button>Confirm</button>
      <button type="button" onClick={onClick}>
        Cancel
      </button>
    </form>
  );
};

export default Checkout;
