import Search from './components/Search/Search';
import Header from './components/Header/HeaderNav';
import BodyNoLogin from './components/BodyNoLogin/BodyNoLogin';
import Footer from './components/Footer/Footer';

import 'bulma/css/bulma.min.css';

// import './components/Search.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Header />
        <Search />
        <BodyNoLogin />
        <Footer />
      </header>
    </div>
  );
}

export default App;
