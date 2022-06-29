import React, { useState } from "react";

const initState = {
  fname: "brude",
  lname: "wayen",
};
const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);
  const changeName = () => {
    person.fname = "h";
    person.lname = "k";
    console.log(person);
    setPerson(person);
  };
  console.log("render", person);
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};

export default ObjectUseState;
