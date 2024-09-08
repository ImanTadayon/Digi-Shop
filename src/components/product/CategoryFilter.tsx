import React from "react";

interface CategoryFilterProps {
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categoryFilter,
  onCategoryChange,
}) => {
  return (
    <select
      value={categoryFilter}
      onChange={(event) => onCategoryChange(event.target.value)}
      className="border p-2 rounded w-full mt-2"
    >
      <option value="">All Categories</option>
      <option value="women's clothing">Women</option>
      <option value="men's clothing">Men</option>
      <option value="jewelery">Jewellery</option>
      <option value="electronics">Electronics</option>
    </select>
  );
};

export default CategoryFilter;
