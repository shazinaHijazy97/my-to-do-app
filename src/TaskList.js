import React from 'react';
import './TaskList.css';

function TaskList() {
  const tasks = ['Buy groceries', 'Study React', 'Prepare CV', 'Apply for Jobs', 
    'Read on Text CSS styling', 'Volunteering', 'Look for Mentors','Go for a Walk', 'Read the Book'];

  return (
    <div>
      <h2>Task List</h2>
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