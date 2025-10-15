import React from 'react'

export default function TaskForm() {
    let task;
    return (
        <form>
            <div>
                <input type="text" placeholder="Enter the task" value={task} />
                <button type="submit">Add Task</button>
            </div>

            <div>
                <select id="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select id="category">
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>


        </form>
    )
}
