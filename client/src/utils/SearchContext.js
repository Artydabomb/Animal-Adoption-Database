import React from "react";

const SearchContext = React.createContext({
  searchTerm: "",
  speciesSearch: "dog",
  zipCode: "",
  searchResults: [],
  isSearched: false,
  page: 1,
  rows: 0
});

export default SearchContext;