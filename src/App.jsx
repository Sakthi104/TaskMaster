import React from 'react'
import TaskForm from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  return (
    <div>
      <h1>Task Master</h1>
      <p>Your ultimate task management app!</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}
