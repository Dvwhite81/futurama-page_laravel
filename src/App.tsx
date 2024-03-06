import { SyntheticEvent, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Notification from './components/Notification';
import './App.css';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [query, setQuery] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setQuery('');
  };

  return (
    <div id='main-container' className='container'>
      <NavBar />
      <Notification message={message} setMessage={setMessage} />
      <div className='container' style={{ height: 'var(--main-height)' }}>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                query={query}
                setQuery={setQuery}
                handleSubmit={handleSearchSubmit}
              />
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
