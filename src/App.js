import "./App.css";
import { useReducer} from "react";

function App() {
  const [currentStatus,newStatus] = useReducer(newStatus(currentStatus => !currentStatus),(false))
 
  return (
    <div className="App">
      <input
        type="checkbox"
        value={currentStatus}
        onChange={newStatus}
        
      />
      <label>{ currentStatus ? 'Agreed to terms and Condtition' : 'Click to agree to terms and Conditions'}
      </label>
    </div>
  );
}

export default App;
