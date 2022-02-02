import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  /*    
  
                      S   T   A  N 
      On Thursday just resume the video.  She is talking
      about 'controlled' and 'uncontrolled' form values. 

      You kind of stopped paying attention after an hour, 
      so we are going stop here.


  */

  function onChangeNameHandler(event) {
    console.log("onChangeNameHandler()...");
    const newValue = event.target.value;
    const inputName = event.target.name;
    console.log("newValue=" + newValue);
    console.log("inputName=" + inputName);
  }

  function onClickHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          value={fullName.fName}
          onChange={onChangeNameHandler}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={fullName.lName}
          onChange={onChangeNameHandler}
          placeholder="Last Name"
        />
        <button onClick={onClickHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
