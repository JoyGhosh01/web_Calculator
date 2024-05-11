import React, { useState } from 'react'
import './App.css'
import moonIcon from './assets/icon.png'
import sunIcon from './assets/sun.png'
import Head from './componentss/Head';
import KeyPad from './componentss/KeyPad';

function App() {

  const [isDark, setIsDark] = useState(false);
  const [expression ,setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history,setHistory] = useState([])

  const allUsedCodes = [
    55, 56, 57, 52, 53, 54, 49, 50, 51, 96, 190, 187, // codes from keyCodes array
    8,13,107, 109, 106, 111 // codes from SymbolsCodes array
  ];
  const numbers = ["1","2","3","4","5","6","7","8","9","0"];
  const operators = ["+","-","*","/"]

  const handleKeypress = (code,key) => {
    if(!code) return;
    if(!allUsedCodes.includes(code)) return;
    
    if(numbers.includes(key)){
      if(key==="0"){
        if(expression.length===0){
          return
        }
      }
      
      setExpression(expression+key);
      calculateResult(expression+key);
    }
    else if(operators.includes(key)){
        if(expression.length===0) return;
        const lastChar = expression.slice(-1);
        if(operators.includes(lastChar)) return;
        if(lastChar===".") return;
        setExpression(expression+key);
        console.log("operator");
    }
    else if(code=== 8){
      if(expression.length===0) return;
      calculateResult(expression.slice(0,-1));
      setExpression(expression.slice(0,-1));
    }
    else if(key==="."){
      if(expression.length===0) return;
      const lastChar = expression.slice(-1);
      if(!numbers.includes(lastChar)) return;
      setExpression(expression+key);
    }
    else if(code===187){
      if(expression.length===0) return;
      calculateResult(expression);
      const tempHistory = [...history]
      if(tempHistory.length>=20){
        tempHistory = tempHistory.splice(0,1);
      }
      tempHistory.push(expression);
      setHistory(tempHistory);
      setExpression("");
    }

  }

  const calculateResult = (exp) => {
    if (!exp) {
      setResult("");
      return
    };
    const lastChar = exp.slice(-1);
    if (!numbers.includes(lastChar)) {
        exp = exp.slice(0, -1);
    }
    const answer = eval(exp).toFixed(2) + "";
    setResult(answer);
}

  return (
    <div className='app'
     onKeyDown={(event)=>handleKeypress(event.code,event.key)}
     data-theme={`${isDark ? "dark" : ""}`}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div onClick={()=> setIsDark(!isDark)} className="app_calculator_navbar_toggle">
            <div className={`app_calculator_navbar_toggle_circle ${isDark ? "app_calculator_navbar_toggle_circle_active" : ""}`}>
            </div>
          </div>
          <img src={isDark ? moonIcon : sunIcon} alt="" />
        </div>
        <Head expression={expression} result={result} history={history}/>
        <KeyPad handleKeypress={handleKeypress}/>
      </div>
    </div>
    
  )
}
export default App
