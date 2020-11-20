import React from 'react';

import './style.css'

function Equals({ setResult }) {
  return (
    <>
      <button
        type="button"
        onClick={() => setResult(result => {
          console.log(eval(result.join("")))
          setResult([eval(result.join("")), "", ""])
        })}
        className="operator"
        name="=">=</button>
    </>
  )
}

export default Equals;