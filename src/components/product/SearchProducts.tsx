import React from "react";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchProducts: React.FC<SearchProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="border p-2 rounded w-full mt-2"
    />
  );
};

export default SearchProducts;
