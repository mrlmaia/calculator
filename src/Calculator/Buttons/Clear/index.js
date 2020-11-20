import React from 'react';

import './style.css'

function Clear({ setResult }) {
  return (
    <button type="button" className="clear-button" onClick={() => setResult(["", "", ""])}>Clear</button>
  )
}

export default Clear;