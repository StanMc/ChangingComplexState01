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

    const { value, name } = event.target;

    function Comment_WrongApproachToSetFullName() {
      /*  
      This doesn't work because it creates a new object 
        each time one of setFullName() functions are called. 
        So, instead use the proper approach below
      */
      if (inputName === "fName") {
        setFullName({ fname: event.target.value });
      } else if (inputName === "lName") {
        setFullName({ lName: event.target.value });
      }
    }

    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
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
