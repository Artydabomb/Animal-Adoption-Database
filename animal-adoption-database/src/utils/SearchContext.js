import React from "react";

const SearchContext = React.createContext({
  searchTerm: "",
  dogSearch: true,
  zipCode: "",
  searchResults: []
});

export default SearchContext;