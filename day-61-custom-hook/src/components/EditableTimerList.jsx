import { useContext } from 'react'
import EditableTimer from './EditableTimer.jsx'
import { TimerContext } from '../context/TimerContext.js'

export default function EditableTimerList({ onFormSubmit }) {
  const { timers, setTimers } = useContext(TimerContext)

  const timerList = timers.timers.map((timer, index) => (
    <EditableTimer
      key={index}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      onFormSubmit={onFormSubmit}
    />
  ))

  return <div>{timerList}</div>
}
