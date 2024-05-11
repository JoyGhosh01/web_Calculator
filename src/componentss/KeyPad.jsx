import React from 'react'
import './keypad.css'

function KeyPad(props) {
  const keyCodes = [
    { key: "7", code: 55 },
    { key: "8", code: 56 },
    { key: "9", code: 57 },
    { key: "4", code: 52 },
    { key: "5", code: 53 },
    { key: "6", code: 54 },
    { key: "1", code: 49 },
    { key: "2", code: 50 },
    { key: "3", code: 51 },
    { key: "0", code: 96 },
    { key: ".", code: 190 },
    { key: "=", code: 187 }
  ];

  const SymbolsCodes = [
    { key: 'Backspace', code: 8, level: '⌫' },
    { key: '+', code: 107, level: '+' },  // Plus
    { key: '-', code: 109, level: '-' },  // Minus
    { key: '*', code: 106, level: 'x', shiftRequired: true },  // Asterisk (*) - Note: Shift key required for '*'
    { key: '/', code: 111, level: '÷' } // Slash
      // Backspace
  ];



  return (
    <div className='keypad'>
      <div className="keypad_keys">{
        keyCodes.map((items,index)=><p
          onClick={()=> props.handleKeypress(items.code,items.key)}
          key={index}>{items.key}</p>)
      }
      </div>  
      <div className="separator"></div>
      <div className="keypad_symbols">
      {
        SymbolsCodes.map((items,index)=><p 
          onClick={()=> props.handleKeypress(items.code,items.key)}
          key={index}>{items.level}</p>)
      }
      </div>      
    </div>
  )
}

export default KeyPad