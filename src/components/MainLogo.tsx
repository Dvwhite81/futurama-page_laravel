import { Link } from 'react-router-dom';

const MainLogo = () => {
  return (
    <div id="main-logo-container">
      <Link to="/" style={{ height: '90%', width: '100%' }}>
        <img id="main-logo" src="/futurama-logo.png" alt="main logo" />
      </Link>
    </div>
  );
};

export default MainLogo;
