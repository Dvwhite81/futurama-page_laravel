import { CATEGORIES } from '../utils/api';
import CategoryLink from '../components/CategoryLink';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home page container'>
      {CATEGORIES.map((category) => (
        <div className='home-link'>
          <CategoryLink
            key={category}
            category={category}
            img={`/${category}.png`}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
