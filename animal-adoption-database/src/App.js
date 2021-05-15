import Search from './components/Search/Search';
import Header from './components/Header/HeaderNav';
import 'bulma/css/bulma.min.css';

// import './components/Search.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Search />
      </header>
    </div>
  );
}

export default App;
