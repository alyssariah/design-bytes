import { useState } from 'react';
import { Routes } from 'react-router-dom';
import './App.scss';
import { Button } from './components/data-display/button/basic-button/Button';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <Button onClick={switchTheme} label="Toggle Theme"></Button>
      </header>
      <Routes></Routes>
    </div>
  );
}

export default App;
