// src/Header.js
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My To-Do List</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
};

export default Header;

// This component renders the title for your app and uses inline styles to style the background, text, 
// and padding.