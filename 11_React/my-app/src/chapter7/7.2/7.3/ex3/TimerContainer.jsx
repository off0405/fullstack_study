import React from 'react';
import { useState } from "react";
import Timer from './Timer';

function TimerContainer(props) {
  const [showTimer, setShowTimer] = useState(false);
  
  return (
    <>
      {showTimer && <Timer/>}
      <button onClick={()=>{setShowTimer(!showTimer)}}>
        on/off 토글
      </button>
    </>
  );
}

export default TimerContainer;