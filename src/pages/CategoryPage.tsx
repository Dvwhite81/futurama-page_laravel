import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const [data, setData] = useState('');
  const { category } = useParams();

  const getData = async () => {
    const resp = await fetch(`https://api.sampleapis.com/futurama/${category}`);
    const json = await resp.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('data:', data);
  return (
    <div className="category-page page container">
      <h2 className="pad-left">{category}</h2>
      <p>Searched Category: {category}</p>
    </div>
  );
};

export default CategoryPage;
