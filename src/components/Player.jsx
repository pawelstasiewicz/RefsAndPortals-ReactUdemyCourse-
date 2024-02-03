import { useState,useRef } from "react";

export default function Player() {

  const inputChange = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)


  function handleClick(){
    setEnteredPlayerName(inputChange.current.value)
    inputChange.current.value =''
  }

  return (
    
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknow entity' }</h2>
      <p>
        <input type="text" ref={inputChange}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
