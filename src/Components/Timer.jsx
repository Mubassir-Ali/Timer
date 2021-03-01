import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    
  }, [timerOn]);

  return <div>
      <div>{time}</div>
      <button onClick={setTimerOn(true)}>Start</button>
      <button onClick={setTimerOn(false)}>Start</button>
      <button onClick={setTime(0)}>Start</button>
  </div>;
};
