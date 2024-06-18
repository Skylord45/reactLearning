import { useState } from 'react'

function App() {


  let [counter, setCounter] = useState(2);

  //  let counter = 45;
  
  const addVal = () => {
    // counter = counter + 1;
    // console.log(counter)

    setCounter(counter+1);
  }

  const removeValue = () => {
    if(counter == 0){
      return;
    }
    setCounter(counter-1);
  }


  return (
   <>
    <h1>Your counter Value : {counter} </h1>
    <button
     onClick={addVal}
    >Add value
    </button> {"   "}
    <button
    onClick={removeValue}
    >Remove value </button>
    <p>counter Value : {counter}</p>
   </>
  )
}

export default App

/*
Read Documentation : https://www.w3schools.com/react/react_usestate.asp

The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.


What Can State Hold : -
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
We could create multiple state Hooks to track individual values.

*/