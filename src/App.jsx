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

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Task Master</h1>
      <p>Your ultimate task management app!</p>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}
