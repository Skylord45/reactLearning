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
