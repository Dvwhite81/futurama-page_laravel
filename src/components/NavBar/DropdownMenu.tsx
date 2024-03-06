import { useNavigate } from 'react-router-dom';

interface DropdownMenuProps {
  leftPosition: string;
  handleClick: () => void;
}

const DropdownMenu = ({ leftPosition, handleClick }: DropdownMenuProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (category: string) => {
    navigate(`/categories/${category}`);
    handleClick();
  };

  const dummyCategories = [
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5',
    'category 6',
  ];

  return (
    <div
      className="dropdown-menu"
      style={{ left: leftPosition }}
    >
      {dummyCategories.map((category) => (
        <div
          key={category}
          className="dropdown-item"
          onClick={handleClick}
        >
          <p
            key={category}
            onClick={() => handleLinkClick(category)}
          >
            {category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
