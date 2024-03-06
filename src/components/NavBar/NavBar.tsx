import { useState } from 'react';
import WhiteMenuIcon from '../../assets/images/white-menu-icon.png';
import DropdownMenu from './DropdownMenu';
import MainLogo from './MainLogo';
import '../../styles/NavBar.css';

const NavBar = () => {
  const [leftPosition, setLeftPosition] = useState('-40vw');

  const toggleVisible = () => {
    if (leftPosition === '0') {
      setLeftPosition('-40vw');
    } else {
      setLeftPosition('0');
    }
  };

  return (
    <nav id='navbar'>
      <div className='dropdown-container' onClick={toggleVisible}>
        <img className='menu-icon icon' src={WhiteMenuIcon} alt='menu icon' />
        <DropdownMenu leftPosition={leftPosition} handleClick={toggleVisible} />
      </div>
      <MainLogo />
    </nav>
  );
};

export default NavBar;
