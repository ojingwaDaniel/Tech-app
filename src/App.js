import "./App.css";
import { useRef} from "react";

function App() {
  const colorName = useRef();
  const hexColor = useRef();
  const submit = e => {
    e.preventDefault()
    let name = colorName.current.value
    let  color = hexColor.current.value
    alert(`${name} , ${color}`)
    colorName.current.value = ''
    hexColor.current.value = ''
  }
  
  
  return (
    <div className="App">
      <h1>A color Picker</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="name of color"  ref={colorName}/>
        <input type="color"  ref={hexColor}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
  
    
}

export default App;
