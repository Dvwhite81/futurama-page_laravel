import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Notification from './components/Notification';
import './App.css';

function App() {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div id='main-container' className='container'>
      <NavBar />
      <Notification message={message} setMessage={setMessage} />
      <div className='container' style={{ height: 'var(--main-height)' }}>
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route
            path={'/categories/:category'}
            element={<CategoryPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
