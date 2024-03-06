import CategoryLink from './CategoryLink';
import MainLogo from './MainLogo';
import './../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav id='navbar'>
      <div className='left navlink'>
        <CategoryLink category='cast' />
      </div>
      <div className='left navlink'>
        <CategoryLink category='characters' />
      </div>
      <div>
        <MainLogo />
      </div>
      <div className='right navlink'>
        <CategoryLink category='episodes' />
      </div>
      <div className='right navlink'>
        <CategoryLink category='trivia' />
      </div>
    </nav>
  );
};

export default NavBar;
