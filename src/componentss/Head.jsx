import React, { useEffect, useRef } from 'react'
import './head.css'

function Head(props) {
  const resultRef = useRef();
  const expressionRef = useRef();
  useEffect(()=>{
    resultRef.current.scrollIntoView({behavior:"smooth"})
  })
 

  return (
    <div className='header custom-scroll'>
      <div className="header_histry">
        {props.history &&
          props.history ?.map((item,index)=>(<p key={item+index}>{item}</p>)
       ) }
        <br />
      </div>
      <div ref={expressionRef} className="header_expresseion custom-scroll">
        <p>{props.expression}</p>
        <br />
      </div>
      <div className="header_result">
        <p ref={resultRef}>{props.result}</p>
      </div>
    </div>
  )
}

export default Head