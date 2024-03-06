import React from "react";

interface CategoryPageProps {
  category: string
}

const CategoryPage = ({
  category,
}: CategoryPageProps) => {
  return (
    <div className="category-page page container">
      <h2 className="pad-left">{category}</h2>
      <p>Searched Category: {category}</p>
    </div>
  );
};

export default CategoryPage;
