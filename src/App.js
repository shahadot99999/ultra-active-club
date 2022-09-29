import React from 'react';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Blog></Blog>
    </div>
  );
}

export default App;
