import { Link } from 'react-router-dom';

interface CategoryLinkProps {
  category: string;
  img?: string;
}

const CategoryLink = ({ category, img }: CategoryLinkProps) => {
  return (
    <Link to={`/categories/${category}`}>
      <h2>{category}</h2>
      {img && (
        <img
          className='img-link'
          src={`/${category}.png`}
          alt={`${category} link`}
        />
      )}
    </Link>
  );
};

export default CategoryLink;
