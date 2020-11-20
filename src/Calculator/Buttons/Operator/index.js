import React from 'react';

import './style.css'

function Operator({ setResult, operator }) {
  return (
    <>
      <button
        type="button"
        onClick={e => setResult(result => {
          let [first, operator, second] = result
          if (!operator) {
            return [first, e.target.name, second]
          }
          if (!second) {
            return [first, e.target.name, second]

          }
          return [eval(result.join("")), e.target.name, ""]
        })}
        className="operator"
        name={operator}>{operator}</button>
    </>
  )
}

export default Operator;