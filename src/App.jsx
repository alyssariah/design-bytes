import { useState } from 'react';
import { Routes } from 'react-router-dom';
import './App.scss';
import { BasicButton } from './components/data-display/button/basic-button/BasicButton';

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
        <h1 className="h1">Hello Vite + React!</h1>
        <br />
        <BasicButton onClick={switchTheme} label="Toggle Theme" boxShadow={5}></BasicButton>
      </header>
      <Routes></Routes>
    </div>
  );
}

export default App;
