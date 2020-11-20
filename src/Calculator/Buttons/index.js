import React from 'react';
import Clear from './Clear';
import Equals from './Equals';
import Number from './Number';
import Operator from './Operator';
import Point from './Point';

function Buttons({ setResult }) {
  return (
    <>
      <div className="row">
        <Clear setResult={setResult} />
      </div>
      <div className="row">
        <Number setResult={setResult} number="7" />
        <Number setResult={setResult} number="8" />
        <Number setResult={setResult} number="9" />
        <Operator setResult={setResult} operator="*" />
      </div>
      <div className="row">
        <Number setResult={setResult} number="4" />
        <Number setResult={setResult} number="5" />
        <Number setResult={setResult} number="6" />
        <Operator setResult={setResult} operator="-" />
      </div>
      <div className="row">
        <Number setResult={setResult} number="1" />
        <Number setResult={setResult} number="2" />
        <Number setResult={setResult} number="3" />
        <Operator setResult={setResult} operator="+" />
      </div>
      <div className="row">
        <Number setResult={setResult} number="0" />
        <Operator setResult={setResult} operator="÷" />
        <Point setResult={setResult} />
        <Equals setResult={setResult} />
      </div>
    </>
  );
}

export default Buttons;