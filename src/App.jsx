import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/home/Home';

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
    <main className="app" data-theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home switchTheme={switchTheme} />}></Route>
      </Routes>
    </main>
  );
}

export default App;
