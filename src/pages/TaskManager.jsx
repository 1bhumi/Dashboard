import "./TaskManager.css"

import React, { useState, useEffect } from 'react';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  // Add new task to the list
  const addTask = () => {
    if (task.trim() !== '' && time !== '') {
      setTasks([...tasks, { task, time, notified: false }]);
      setTask('');
      setTime('');
    }
  };

  // Remove task from the list
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Notify for upcoming tasks
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      tasks.forEach((t, index) => {
        const taskTime = new Date(t.time);
        if (taskTime <= now && !t.notified) {
          // Trigger notification
          alert(`Task "${t.task}" is due now!`);
          // Mark the task as notified
          setTasks((prevTasks) => 
            prevTasks.map((task, i) => i === index ? { ...task, notified: true } : task)
          );
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval); // Clean up the interval
  }, [tasks]);

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="todo-input">
        <input 
          type="text" 
          placeholder="Enter your task" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <input 
          type="datetime-local" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      
      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t.task} - {new Date(t.time).toLocaleString()}</span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
