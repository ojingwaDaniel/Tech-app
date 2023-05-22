import "./App.css";
import { useRef} from "react";

function App() {
  return (
    <div className="App">
      <h1>A color Picker</h1>
      <form action="">
        <input type="text" placeholder="name of color" />
        <input type="color" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
  
    
}

export default App;
