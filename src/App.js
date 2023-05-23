import "./App.css";
import { useState} from "react";

function App() {
  const [name,setName] = useState("")
  const [color,hexColor] = useState("#00000")
  const submit = e => {
    e.preventDefault()
    alert(`${name} , ${color}`);
    e.target.reset()
  }
  
  
  return (
    <div className="App">
      <h1>A color Picker</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="name of color"
          onChange={(event) => setName(event.target.value)}
        />
        <input type="color" onChange={(event)=> hexColor(event.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
  
    
}

export default App;
