import React from "react";

const SearchContext = React.createContext({
  searchTerm: "",
  speciesSearch: "dog",
  zipCode: "",
  searchResults: [],
  isSearched: false
});

export default SearchContext;