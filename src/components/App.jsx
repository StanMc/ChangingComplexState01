import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  function onChangeFirstName(event) {
    console.log("onChangeFirstName()...");
    setFirstName(event.target.value);
    console.log(firstName);
  }

  function onChangeLastName(event) {
    console.log("onChangeLastName()...");
    setLastName(event.target.value);
  }

  function onClickHandler(event) {
    console.log("onClickHandler()...");
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          value={firstName}
          onChange={onChangeFirstName}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={lastName}
          onChange={onChangeLastName}
          placeholder="Last Name"
        />
        <button onClick={onClickHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
