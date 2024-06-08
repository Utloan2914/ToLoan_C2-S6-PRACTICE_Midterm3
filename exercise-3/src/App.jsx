import React, { useState } from "react";
import './index.css';
function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  /* You will need some function to handle the key pressed and button events */
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  
  const handleInputA = (event) => {
    setA(event.target.value);
  };

  const handleInputB = (event) => {
    setB(event.target.value);
  };
  const handleCompute = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setError(true);
      setResult("A and B shall be numbers!");
    } else {
      setError(false);
      setResult(numA + numB);
    }
  };
  
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={a} onChange={handleInputA} />

      <label>B =</label>
      <input type="text" value={b} onChange={handleInputB} />

      <label>A + B =</label>
       {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input class= "result" type="text" value={result} disabled  />
      
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
