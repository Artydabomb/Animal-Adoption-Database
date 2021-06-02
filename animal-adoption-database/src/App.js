import React, { useState, useEffect } from "react";
import Search from './components/Search/Search';
import Header from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import Footer from './components/Footer/Footer';
import API from './utils/API'
import "./App.css";
import 'bulma/css/bulma.min.css';
import SearchContext from './utils/SearchContext';
import SavedSearches from "./components/SavedSearches/SavedSearches";

// import './components/Search.css';

function App() {

  const [searchState, setSearchState] = useState({
    searchTerm: "",
    dogSearch: true,
    zipCode: "",
    searchResults: []
  });

  function setResults(data) {
    setSearchState({
      ...searchState,
      searchResults: Object.entries(data).map((e) => ( { [e[0]]: e[1] } ))
    })
    console.log(searchState.searchResults)
  }

  return (
    <SearchContext.Provider value={searchState}>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search setResults={setResults}/>
          <SavedSearches />
          <BodyNoLogin />
          <Footer />
        </header>
      </div>
    </SearchContext.Provider>
  );
}

export default App;