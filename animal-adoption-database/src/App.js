import React, { useState, useEffect } from "react";
import Search from './components/Search/Search';
import Header from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import Footer from './components/Footer/Footer';
import API from './utils/API'
import "./App.css";
import 'bulma/css/bulma.min.css';
import SearchContext from './utils/SearchContext';

// import './components/Search.css';

function App() {

  const [searchState, setSearchState] = useState({
    searchTerm: "",
    speciesSearch: "dog",
    zipCode: "",
    searchResults: []
  });

  function setResults(data) {
    setSearchState({
      ...searchState,
      searchResults: Object.values(data)
    })
    console.log(data)
  }

  function setSearchSpeciesCat() {
    setSearchState({
      ...searchState,
      speciesSearch: "cat"
    })
  }

  function setSearchSpeciesDog() {
    setSearchState({
      ...searchState,
      speciesSearch: "dog"
    })
  }

  return (
    <SearchContext.Provider value={searchState}>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search setResults={setResults} setSearchSpeciesCat={setSearchSpeciesCat} setSearchSpeciesDog={setSearchSpeciesDog}/>
          <BodyNoLogin />
          <Footer />
        </header>
      </div>
    </SearchContext.Provider>
  );
}

export default App;