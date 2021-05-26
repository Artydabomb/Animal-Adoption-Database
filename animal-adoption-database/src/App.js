import logo from './logo.svg';
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
      </header>
    </div>
  );
}

export default App;
