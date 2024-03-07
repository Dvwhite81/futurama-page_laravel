import { CATEGORIES } from '../utils/helpers';
import CategoryLink from '../components/CategoryLink';
import '../styles/Home.css';
import '../styles/Pages.css';

const Home = () => {
  return (
    <div className='home page container'>
      {CATEGORIES.map((category) => (
        <div key={category} className='home-link'>
          <CategoryLink category={category} img={`/${category}.png`} />
        </div>
      ))}
    </div>
  );
};

export default Home;
