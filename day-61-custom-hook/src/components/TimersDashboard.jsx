import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm.jsx'
import { TimerContext } from '../context/TimerContext'
import { useContext } from 'react'

export default function TimersDashboard() {
  const { handleCreateFormSubmit, handleEditFormSubmit } =
    useContext(TimerContext)
  const URL = 'http://localhost:8080/timers'

  return (
    <div>
      <h1>Timers</h1>
      <div>
        <EditableTimerList onFormSubmit={handleEditFormSubmit} />
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
      </div>
    </div>
  )
}
