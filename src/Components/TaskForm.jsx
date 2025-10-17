import React from 'react';
import { useState } from 'react';
export default function TaskForm({ addTask }) {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("medium");
    const [category, setCategory] = useState("general");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask({ text: task, priority, category, completed: false });
            setTask("");
            setPriority("medium");
            setCategory("general");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter the task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </div>

            <div>
                <select id="priority" onChange={(e) => setPriority(e.target.value)} value={priority}>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>

                <select id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>


        </form>
    )
}
