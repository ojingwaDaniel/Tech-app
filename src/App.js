import "./App.css";
import { useState,useEffect} from "react";

// function useInput(initialValue){
//   const [value , setValue] = useState(initialValue)
//   return(
//     [
//     {value,onChange: e => setValue(e.target.value)},
//     ()=> setValue(initialValue)
//     ]
//   )
// }
//   function App() {
//   const [colorTitle,resetTitle] = useInput("")
//   const [hexColor,resetColor] = useInput("#00000")
//   const submit = e => {
//     e.preventDefault()
//     alert(`${colorTitle.value} , ${hexColor.value}`);
//     resetTitle()
//     resetColor()
//   }
//   return (
//     <div className="App">
//       <h1>A color Picker</h1>
//       <form onSubmit={submit}>
//         <input
//           type="text"
//           placeholder="name of color"
//           {...colorTitle}
//         />
//         <input type="color" {...hexColor} />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }
function WebUser({name,location,avater}){
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src="https://avatars.githubusercontent.com/u/79636701?v=4" alt="name"  height={150}/>
    </div>
  );
}
function App(){
  const [data,setData] = useState(null)
  useEffect(()=>{
    fetch(`https://api.github.com/users/ojingwaDaniel`)
    .then(response=> response.json())
    .then(setData)
  },[])
  if (data)
  return (
    <WebUser
      name={data.name}
      location={data.location}
      avater={data.avatar_url}
    />
  );
  return(
    <div className= 'App'>
      <h1>Data</h1>
    </div>
  )}
export default App;
