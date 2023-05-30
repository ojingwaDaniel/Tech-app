import "./App.css";
import { useState,useEffect} from "react";
// function App(){
//   const [data,setData] = useState(null)
//   useEffect(()=>{
//     fetch(`https://api.github.com/users/ojingwaDaniel`)
//     .then(response=> response.json())
//     .then(setData)
//   },[])
//   if (data)
//   return(
//    <pre>{JSON.stringify(data,null,2)}</pre>
//    )
//   return(
//     <div className= 'App'>
//       <h1>Data</h1>
//     </div>
//   )}
function useInput(initialValue){
  const [value , setValue] = useState(initialValue)
  return(
    [
    {value,onChange: e => setValue(e.target.value)},
    ()=> setValue(initialValue)
    ]
  )
}
  function App() {
  const [colorTitle,resetTitle] = useInput("")
  const [hexColor,resetColor] = useInput("#00000")
  const submit = e => {
    e.preventDefault()
    alert(`${colorTitle.value} , ${hexColor.value}`);
    resetTitle()
    resetColor()
  }
  return (
    <div className="App">
      <h1>A color Picker</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="name of color"
          {...colorTitle}
        />
        <input type="color" {...hexColor} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default App;
