import { SyntheticEvent } from 'react';
import Search from '../components/Search';
import { CATEGORIES } from '../utils/api';
import CategoryLink from '../components/CategoryLink';

interface HomeProps {
  query: string
  setQuery: (value: string) => void
  handleSubmit: (e: SyntheticEvent) => void
}

const Home = ({
  query,
  setQuery,
  handleSubmit,
}: HomeProps) => {
  return (
    <div className="home page container">
      <Search query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      {CATEGORIES.map((category) =>
        <CategoryLink key={category} category={category} />
      )}
    </div>
  );
};

export default Home;
