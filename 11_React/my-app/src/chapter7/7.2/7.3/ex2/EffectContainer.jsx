import React from 'react';
import { useEffect, useState } from "react";
import EffectSummary from './EffectSummary';


function EffectContainer(props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={()=>{setIsVisible(false)}}>사라져라</button>
      <button onClick={()=>{setIsVisible(true)}}>나타나라</button>
      {isVisible && <EffectSummary/>}

    </>
  );
}

export default EffectContainer;