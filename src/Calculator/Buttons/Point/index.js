import React from 'react';

import './style.css'

function Point({ setResult }) {
  return (
    <>
      <button
        type="button"
        onClick={e => setResult(result => {
          let [first, operator, second] = result

          if (first !== '' && operator === '') {
            if (first.split('.').length === 2) return [first, operator, second]
            return [first + e.target.name, operator, second]
          }
          if (second !== '') {
            if (second.split('.').length === 2) return [first, operator, second]
            return [first, operator, second + e.target.name]
          }

          if (first === '') return [first + e.target.name, operator, second]
          return [first, operator, second + e.target.name]

        })}
        className="operator"
        name=".">.</button>
    </>
  )
}

export default Point;