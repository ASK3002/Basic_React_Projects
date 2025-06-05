import { useState } from "react"
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const [message, setMessage] = useState("");

  //function declaration one way
  const addValue=()=>{
    count=count+1;
    setCounter(counter+1)
    setMessage("");
  }
   //function declaration another way
  let count=0;
  function subValue(){
    if(counter>0) {
      setCounter(counter-1)
      setMessage("");
    }
    else {
      setMessage("Cannot reduce below zero!");
      setCounter(0); // optional, but safe
    }
  }


  return (
    <div className="container">
      <h1>Counter Using React</h1>
      <h2>COUNTER : {counter}</h2>
      <div id="btn">
        <button className="add" onClick={addValue}>Add</button>
        <button className="sub" onClick={subValue}>Remove</button>
      </div>
      <h3 style={{ color: "red" }}>{message}</h3>  
    </div>
  )
}

export default App
