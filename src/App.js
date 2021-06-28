import React, { useState  } from 'react'

import './App.css';

function App() {
  const [result, setResult] = useState("")
  const handleClick=(e)=>{
console.log(e.target.innerHTML);
setResult(result+(e.target.innerHTML))
  }
    const clear=()=>{
setResult("")
  }
    const calc=()=>{
try {
  setResult(eval(result.toString()))
} catch (error) {
  setResult("error")
}


  }
  return (
    <div className="App">
     <section  className="container">
        <form className="calculator" name="calc">
            <input type="text" readonly className="input" name="txt" value={result}/>
            <span className="num clear"    onClick={clear}>C</span>
            <span className="num divide" name="/" onClick={handleClick}>/</span>
            <span className="num zarb"name="*" onClick={handleClick}>*</span>
            <span className="num" name="7" onClick={handleClick}>7</span>
            <span className="num" name="8" onClick={handleClick}>8</span>
            <span className="num" name="9" onClick={handleClick}>9</span>
            <span className="num mines" name="-" onClick={handleClick}>-</span>
            <span className="num" name="4" onClick={handleClick}>4</span>
            <span className="num" name="5" onClick={handleClick}>5</span>
            <span className="num" name="6" onClick={handleClick}>6</span>
            <span className="num plus" name="+" onClick={handleClick}>+</span>
            <span className="num" name="1" onClick={handleClick}>1</span>
            <span className="num" name="2" onClick={handleClick}>2</span>
            <span className="num" name="3" onClick={handleClick}>3</span>
            <span className="num" name="0" onClick={handleClick}>0</span>
            <span className="num" name="00" onClick={handleClick}>00</span>
            <span className="num" name="." onClick={handleClick}>.</span>
            <span className="num equal" name="=" onClick={calc}>=</span>
        

        </form>

    </section>
    </div>
  );
}

export default App;
