import "./App.css";
import { useState } from "react";

function App() {
  const [currentStatus,newStatus] = useState(false)
 
  return (
    <div className="App">
      <input
        type="checkbox"
        value={currentStatus}
        onChange={()=>newStatus(currentStatus => !currentStatus)}
        
      />
      <label>{ currentStatus ? 'Agreed to terms and Condtition' : 'Click to agree to terms and Conditions'}
      </label>
    </div>
  );
}

export default App;
