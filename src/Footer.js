// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2025 My To-Do List. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: 'grey',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;

// This component displays a footer at the bottom of the page with a copyright message, 
// and styles it with a dark background, white text, and a fixed position at the bottom of the screen.
// typically including copyright information, contact details, and sitemap links. 

/*
  - **Named Colors**: Use predefined color names (e.g., 'red', 'blue', 'green').
    Example: backgroundColor: 'blue'

  - **Hexadecimal Colors**: Use HEX color codes (e.g., '#FF5733').
    Example: backgroundColor: '#4CAF50'

  - **RGB Colors**: Specify colors using RGB values (e.g., 'rgb(255, 87, 51)').
    Example: backgroundColor: 'rgb(255, 87, 51)'

  - **RGBA Colors**: RGB with transparency (e.g., 'rgba(255, 87, 51, 0.8)').
    Example: backgroundColor: 'rgba(255, 87, 51, 0.8)'

  - **Gradients**: Use `background` for gradients (e.g., 'linear-gradient(to right, #4CAF50, #FF5733)').
    Example: background: 'linear-gradient(to right, #4CAF50, #FF5733)'
*/
