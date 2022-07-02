import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './stories/data-display/button/basic-button/Button';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Button onClick={switchTheme} label="Toggle Theme"></Button>
      </header>
    </div>
  );
}

export default App;
