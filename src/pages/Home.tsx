import { CATEGORIES } from '../utils/api';
import CategoryLink from '../components/CategoryLink';

const Home = () => {
  return (
    <div className="home page container">
      {CATEGORIES.map((category) =>
        <CategoryLink key={category} category={category} />
      )}
    </div>
  );
};

export default Home;
