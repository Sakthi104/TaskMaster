import React from 'react'
import TaskForm from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import { useState } from 'react'
import { useEffect } from 'react'
export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <h1>Task Master</h1>
      <p>Your ultimate task management app!</p>
      <TaskForm addTask={addTask} />
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}
