import React, { useState, useEffect } from "react";
import "./Timer.css";
import { IconButton } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import ReplayIcon from "@material-ui/icons/Replay";

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

  return (
    <div className="container">
      <div className="circle">
        <div className="time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
      <div className="button">
      {timerOn? 
        <IconButton>
          <PauseCircleOutlineIcon onClick={() => setTimerOn(false)} fontSize="large"  />
        </IconButton>:
        <IconButton >
          <PlayCircleOutlineIcon onClick={() => setTimerOn(true)} fontSize="large" />
        </IconButton>
        }
        <IconButton>
          <ReplayIcon onClick={() => setTime(0)} fontSize="large"  />
        </IconButton>
      </div>
    </div>
  );
};
