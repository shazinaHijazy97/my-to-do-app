import React from 'react';
import './TaskList.css';
import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState(['Buy groceries', 'Prepare CV', 'Apply for Jobs', 
    'Read on Text CSS styling', 'Volunteering', 'Look for Mentors','Go for a Walk', 'Read the Book']);

    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
      setNewTask(e.target.value);
    };

      const addTask = () => {
        if (newTask.trim() !== "") { // Prevent empty tasks, trim checks for spaces, ignores leading and trailing spaces leaving the spaces between the content 
          setTasks([...tasks, newTask]); // Add task to the list, ...tasks ensures the prevoius tasks are not changed
          setNewTask(""); // Clear input field
        }
      };


  return (
    <div>
      <h2>Task List</h2>
        <input type= "text"
        value= {newTask}
        onChange ={handleInputChange}
        placeholder="Enter a New Task"/>

        <button onClick={addTask}>Add Task</button>

        <ul className = "task-list">
        {tasks.map((task, index) => (
          <li key={index} className = "task-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

/* 
    TaskList is a React component that renders a list of tasks.
    
    The list is created using the map() function to iterate over the tasks array.
    
    Each task is displayed inside an <li> element.

    The key prop is used in the <li> to help React track and manage the list items more efficiently. 
    
*/