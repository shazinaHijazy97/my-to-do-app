// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: '20px' }}> 
        <h2>To-Do List will go here</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// We're importing both the Header and Footer components and adding them inside the App component. 
// The main content of the app (e.g., the to-do list) will go in between the header and footer.
// Some common attributes for the div tag include id, class, style, and title. 