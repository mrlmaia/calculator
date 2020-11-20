import React from 'react';

import './style.css'

function Result({ result }) {
  const expression = result[0] + result[1] + result[2]

  return <div id="result">
    <p>{expression}</p>
  </div>;
}

export default Result;