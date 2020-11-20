import React from 'react';

import './style.css'

function Number({ setResult, number }) {
  return (
    <>
      <button
        type="button"
        onClick={e => setResult(result => {
          let [first, operator, second] = result
          if (e.target.name == 0) {
            if (first === '') return [first, operator, second]
            if (operator !== '' && second === '') return [first, operator, second]
          }
          if (!operator)
            return [first + e.target.name, operator, second]

          return [first, operator, second + e.target.name]

        })}
        className="number"
        name={number}>{number}</button>
    </>
  )
}

export default Number;