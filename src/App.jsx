import React from 'react'
import TaskForm from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'
import { useState } from 'react'
import { useEffect } from 'react'
import './Style.css'
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

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Task Master</h1>
        <p className='tagline'>Your ultimate task management app!</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button onClick={clearTasks} className='clear-btn'>Clear all tasks</button>
      )}
    </div>
  )
}
