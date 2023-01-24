import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import timerData from "../data/data";
import Timer from "./Timer";
import TimerForm from "./TimerFrom";
export default function TimerDashBoard() {
  const [timers, setTimers] = useState([]);
  const [runningTime, setRunningTime] = useState(0);

  useEffect(() => {
    setTimers(timerData);
  }, []);
  return (
    <div>
      <h1>Timers</h1>
      {timers &&
        timers.map((data) => {
          return (
            <Timer
              project={data.project}
              title={data.title}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
              runningTime={runningTime}
            />
          );
        })}
      <TimerForm title={"Title"} project={"Project"} />
    </div>
  );
}
