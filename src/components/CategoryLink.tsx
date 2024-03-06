import { Link } from 'react-router-dom';

interface CategoryLinkProps {
  category: string;
}

const CategoryLink = ({ category }: CategoryLinkProps) => {
  return (
    <Link to={`/categories/${category}`}>
      <h2>{category}</h2>
    </Link>
  );
};

export default CategoryLink;
