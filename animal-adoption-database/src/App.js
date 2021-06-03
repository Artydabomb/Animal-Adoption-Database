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
    dogSearch: true,
    zipCode: "",
    searchResults: []
  });

  function setResults(data) {
    setSearchState({
      ...searchState,
      searchResults: Object.values(data)
    })
  }

  return (
    <SearchContext.Provider value={searchState}>
      <div className="App container">
        <header className="App-header">
          <Header />
          <Search setResults={setResults}/>
          <BodyNoLogin />
          <Footer />
        </header>
      </div>
    </SearchContext.Provider>
  );
}

export default App;