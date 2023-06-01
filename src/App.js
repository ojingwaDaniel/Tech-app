import "./App.css";
// import { useState,useEffect} from "react";

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
// const query = `query{
//   allLifts{
//     name
//     elevationGain
//     status
//   }
// }`;
// const opt = {
//   method : 'POST',
//   headers : {'Content-Type' : 'application/json'},
//   body : JSON.stringify({query})
// }
// function Lift ({name,elevationGain,status}){
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{elevationGain} {status}</p>
//     </div>
//   );
// }
// function App(){
//   const [data,setData] = useState(null)
//   const [error,setError] = useState(null)
//   const [loading,setLoading] = useState(false);
//   useEffect(()=>{
//     setLoading(true)
//     fetch(`https://snowtooth.moonhighway.com/`,opt)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   },[])
//   if(loading) return <h1>Loading........</h1>
//   if(error) <pre>{JSON.stringify(error)}</pre>
//   if(!data) return null
//   return (
//    <div>
//     {data.data.allLifts.map((lift)=> 
//     <Lift name = {lift.name} 
//     elevationGain ={lift.elevationGain}
//      status = {lift.status}
//      />)}
//    </div>
//   );
// }
const studentData = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];
function StudentList({data,renderItem,renderEmpty}){
  return !data.length ? renderEmpty :(
    <ul>
      {data.map(item=>(
        <li key = {item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
function App(){
   return(
  <div className="App">
  
    <StudentList
     data = {studentData}
     renderEmpty= {<p>this page is empty... </p>}
     renderItem = {(item=>(
      <>{item.name} - {item.elevation} .ft</>
   ))}

     />

  </div>
)

}

export default App;
