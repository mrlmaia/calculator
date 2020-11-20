import React, { useState } from 'react';
import Buttons from './Buttons';
import Result from './Result';
import './style.css';

function Calculator() {
  const [result, setResult] = useState(["", "", ""])

  return (
    <div className="container">
      <Result result={result} />
      <Buttons setResult={setResult} />
    </div>
  );
}

export default Calculator;
